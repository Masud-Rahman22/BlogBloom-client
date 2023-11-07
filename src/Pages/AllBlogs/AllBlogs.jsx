import { useLoaderData } from "react-router-dom";
import Blogs from "./blogs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";


const AllBlogs = () => {
    const allBlogs = useLoaderData();
    const title = useRef()
    const [array, setArray] = useState(allBlogs)
    const [category, setCategory] = useState([])
    const handleSearch = () => {
        const valueHere = title.current.value
        console.log(valueHere);
        const search = allBlogs.filter(element => element.title.toLowerCase().includes(valueHere.toLowerCase()))
        setArray(search);
    }
    const handleFilter = e => {
        e.preventDefault();
        const filter = e.target.value
        console.log(filter);
        if (filter === 'default') {
            setArray(allBlogs)
            console.log(array);
        }
        else {
            axios.get(`http://localhost:5000/blogs?category=${filter}`)
                .then(res => {
                    console.log(res.data);
                    setArray(res.data)
                })
        }
    }
    useEffect(() => {
        axios.get('http://localhost:5000/blogs/categories')
            .then(res => {
                setCategory(res.data)
            })
    }, [])
    console.log(category);
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="ml-10">
                    <input ref={title} className="border-b-2 font-bold text-sm w-[100px] md:w-[200px] h-14 mt-10 p-2 rounded-lg" type="email" name="title" id="" placeholder="Enter Title" required />
                    <button onClick={handleSearch} className="bg-blue-500 text-white w-[100px] h-[55px] mt-10 rounded-md p-3">Search</button>
                </div>
                {/* <div className="form-control flex justify-end gap-3 items-center mr-10">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        className="input input-bordered"
                        onChange={(e) => setCategories(e.target.value)}
                    >
                        <option disabled selected>Choose one</option>
                        {categories?.map((item) => (<option key={item._id} value={item.category}>{item.category}</option>))}
                    </select>
                </div> */}
                <div className="md:mr-10">
                    <select onClick={handleFilter} name="filter" id="">
                        <option value="default">Default</option>
                        {
                            category?.map(item => <option key={item._id} value={item.category}>{item.category}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:ml-20 lg:my-10">
                {
                    array?.map(blog => <Blogs key={blog._id} blog={blog}></Blogs>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;