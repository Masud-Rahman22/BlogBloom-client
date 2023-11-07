import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BlogDetails = () => {
    const details = useLoaderData();
    const {user} = useContext(AuthContext)
    const userEmail = user?.email
    const { title, img, shortDescription, longDescription, category,email, _id } = details;
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
                        email === userEmail && <Link to={`/updates/${_id}`}><button className="bg-blue-500 text-white p-2 rounded-md w-full">Update</button></Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;