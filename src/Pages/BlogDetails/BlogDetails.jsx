import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Label, Textarea } from 'flowbite-react';
import axios from "axios";
import swal from "sweetalert";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion"
import Comments from "./Comments";

const BlogDetails = () => {
    const [comments, setComments] = useState([]);
    const [details, setDetails] = useState([])
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://blog-bloom-server.vercel.app/blogDetails/${id}`)
            .then(res => {
                setDetails(res.data)
            })
    }, [id])
    const { title, img, shortDescription, longDescription, category, email, _id } = details;
    // problem here
    console.log(_id);
    const userEmail = user?.email
    const name = user?.displayName
    const userPhoto = user?.photoURL
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const text = form.textArea.value;
        const blogsId = _id
        const commentsInfo = {
            text,
            userPhoto,
            name,
            blogsId
        }
        console.log(commentsInfo);
        axios.post('https://blog-bloom-server.vercel.app/comments', commentsInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    swal("Great", "Your comment is submitted", "success");
                }
            })

    }
    useEffect(() => {
        axios.get(`https://blog-bloom-server.vercel.app/comments/${_id}`)
            .then(res => {
                console.log(res.data);
                setComments(res.data)
            })
    }, [_id])
    console.log(comments)
    return (
        <div>
            <div className="relative flex w-full max-w-[80rem] flex-col md:flex-row rounded-xl border-2 bg-white mx-auto my-10">
                <div className="relative md:w-2/5 m-0 overflow-hidden bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={img}
                        alt="image"
                        className="object-center w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans antialiased font-semibold leading-relaxed tracking-normal text-4xl uppercase text-blue-500 text-center">
                        {category}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-black text-center">
                        {title}
                    </h4>
                    <div className="flex flex-col gap-2 mt-5">
                        <h2 className="text-center text-xl font-semibold text-blue-500 underline">Short Description</h2>
                        <p className="border-2 text-center block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-black">
                            {shortDescription}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-center text-xl font-semibold text-blue-500 underline">Long Description</h2>
                        <p className="border-2 text-center block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-black">
                            {longDescription}
                        </p>
                    </div>
                    {
                        email === userEmail && <Link to={`/updates/${_id}`}><motion.button whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            style={{ x: 100 }} className="bg-blue-500 text-white p-2 md:ml-28 w-1/2 rounded-md">Update</motion.button></Link>
                    }
                    <form onSubmit={handleSubmit}>
                        <div className="max-w-full">
                            {
                                userEmail !== email ? <div className="mb-2 block">
                                    <Label htmlFor="comment" value="Your message" />
                                </div>
                                :
                                ''
                            }
                            {
                                userEmail !== email ? <Textarea name="textArea" id="comment" placeholder="Leave a comment..." required rows={4} />
                                    :
                                    <p className="text-xl text-black font-semibold text-center md:ml-12 mt-5">Sorry you can not comment on your own blog</p>
                            }
                            {
                                userEmail !== email ? <motion.button whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                style={{ x: 100 }} className="w-1/2 text-center md:ml-28 bg-blue-500 text-white rounded-lg p-2 mt-5">Submit</motion.button>
                                :
                                ''
                            }
                        </div>
                    </form>

                </div>
            </div>
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    comments.map(comment => <Comments comment={comment} key={comment._id}></Comments>)
                }
            </div>
        </div>
    );
}

export default BlogDetails;
