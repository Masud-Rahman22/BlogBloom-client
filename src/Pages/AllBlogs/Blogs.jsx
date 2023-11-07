
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import { Link } from "react-router-dom";


const Blogs = ({ blog }) => {
    const { user } = useContext(AuthContext)
    const { title, img, category, shortDescription, _id } = blog;
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
        <div data-aos="flip-right" className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                <img
                    src={img}
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
                <Link to={`/blogDetails/${_id}`}><button className="bg-blue-500 text-white p-3 rounded-md">Details</button></Link>
                <button className="bg-blue-500 text-white p-3 rounded-md" onClick={handleWishlist}>wishlist</button>
            </div>
        </div>
    );
};

export default Blogs;