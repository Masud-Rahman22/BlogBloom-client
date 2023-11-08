import axios from "axios";
import { useContext, useEffect, useState } from "react";
import swal from 'sweetalert';
import { AuthContext } from "../../Providers/AuthProvider";
const AddBlog = () => {
    const {user} = useContext(AuthContext)
    const [category,setCategory] = useState([])
    const handleToSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const date = new Date()
        const email = user?.email
        const photo = user?.photoURL
        // const currentHours = currentDate.getHours();
        // const currentMinutes = currentDate.getMinutes();
        const currentDate = date.toLocaleDateString()
        const currentTime = date.toLocaleTimeString()
        console.log(currentTime);
        const blogInfo = {
            title,
            img,
            category,
            shortDescription,
            longDescription,
            currentDate,
            currentTime,
            email,
            photo
        }
        const blogCategory = {category}
        console.log(blogInfo);
        form.reset()

        axios.post('http://localhost:5000/blogs',blogInfo)
        .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
                swal("Congratulations", "You just posted a blog!", "success");
            }
        })

        axios.post('http://localhost:5000/blogs/categories',blogCategory)
        .then(res=>{
            console.log(res.data);
        })
    }
    useEffect(() => {
        axios.get('http://localhost:5000/blogs/categories',{withCredentials: true})
            .then(res => {
                setCategory(res.data)
            })
    }, [])
    console.log(category);
    return (
        <form onSubmit={handleToSubmit} className="md:mx-10">
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="img" id="img" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-black">Category:</h1>
                    <select name="category" id="">
                        <option value="default">Default</option>
                        {
                            category?.map(item => <option key={item._id} value={item.category}>{item.category}</option>)
                        }
                        <option value='text'>choose another</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="shortDescription" id="shortDescription" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Short description</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="longDescription" id="longDescription" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Long description</label>
            </div>
            <button className="p-3 bg-blue-500 hover:bg-blue-700 text-white w-full rounded-full">Submit</button>
        </form>
    );
};

export default AddBlog;