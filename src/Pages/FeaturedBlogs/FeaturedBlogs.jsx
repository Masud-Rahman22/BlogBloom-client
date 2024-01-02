import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const FeaturedBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get('https://blog-bloom-server.vercel.app/blogs')
            .then(res => {
                setBlogs(res.data)
            })
    }, [])
    console.log(blogs);
    const sortedBlogData = [...blogs].sort((a, b) => b.longDescription.length - a.longDescription.length);
    const top10Blogs = sortedBlogData.slice(0, 10);
    const columns = [
        {
            name: 'serial number',
            cell: (row, index) => {
                return <div>{index + 1}</div>;
            }
        },
        {
            name: "Blog title",
            selector: (row) => row.title
        },
        {
            name: "blog owner",
            selector: (row) => row.email
        },
        {
            name: "blog owner's profile picture",
            selector: (row) => <img className='rounded-full my-2' width={50} height={50} src={row.photo}></img>
        }
    ]
    return (
        <div className='mx-10'>
            <DataTable
                columns={columns}
                data={top10Blogs}
            />
        </div>
    );
};

export default FeaturedBlogs;