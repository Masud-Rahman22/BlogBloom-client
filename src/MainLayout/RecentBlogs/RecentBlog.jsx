import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const RecentBlog = ({ blog }) => {
    const { user } = useContext(AuthContext)
    // const userEmail = {email: user?.email}
    const { title, img, shortDescription, category, _id } = blog;
    const email = user?.email
    const detailedInfo = {
        title, img, shortDescription, category, email
    }
    const handleWishlist = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/wishlist', detailedInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    swal("Done", "You added this blog to your wishlist", "success");
                }
            })
    }
    return (
        <motion.div whileHover={{ scale: 0.9 }} className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                <img
                    src={img || <Skeleton></Skeleton>}
                    className="object-cover w-full h-full" 
                />
            </div>
            <div className="p-6">
                <div className="flex flex-col items-center justify-between mb-2">
                    <p className="block font-sans antialiased font-medium leading-relaxed text-blue-500 text-4xl">
                        {category}
                    </p>
                    <p className="block font-sans text-2xl antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
                        {title}
                    </p>
                </div>
                <p className="block font-sans text-xl antialiased font-normal leading-normal text-gray-700 opacity-75 text-center">
                    {shortDescription}
                </p>

            </div>
            <div className="p-6 pt-0 flex justify-around items-center">
                <Link to={`/blogDetails/${_id}`}><motion.button className="bg-blue-500 text-white p-3 rounded-md" whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} >Details</motion.button></Link>
                <motion.button whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} className="bg-blue-500 text-white p-3 rounded-md" onClick={handleWishlist}>wishlist</motion.button>
            </div>
        </motion.div >
    );
};

export default RecentBlog;