import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const UpdateBlog = () => {
    const updateBlog = useLoaderData();
    const [categories,setCategories] = useState([])
    const {title,img,category,shortDescription,longDescription, _id} = updateBlog
    const handleToUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const updatedInfo = {
            title,
            img,
            category,
            shortDescription,
            longDescription
        }
        axios.put(`http://localhost:5000/updates/${_id}`,updatedInfo)
        .then(res =>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                swal("Well Done!", "You updated your blog!", "success");
            }
        })
    }
    useEffect(() => {
        axios.get('http://localhost:5000/blogs/categories')
            .then(res => {
                setCategories(res.data)
            })
    }, [])
    console.log(category);
    return (
        <form onSubmit={handleToUpdate} className="md:mx-10">
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" defaultValue={title} required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="img" id="img" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={img} required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    {/* <input type="text" name="category" id="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> */}
                    <div className="flex gap-2 items-center">
                        <h1 className="text-black">Category:</h1>
                    <select name="category" id="">
                        <option value={category}>{category}</option>
                        {
                            categories?.map(item => <option key={item._id} value={item.category}>{item.category}</option>)
                        }
                    </select>
                    </div>
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="shortDescription" id="shortDescription" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" defaultValue={shortDescription} required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Short description</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="longDescription" id="longDescription" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={longDescription} required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Long description</label>
            </div>
            <button className="p-3 bg-blue-500 hover:bg-blue-700 text-white w-full rounded-full">Submit</button>
        </form>
    );
};

export default UpdateBlog;