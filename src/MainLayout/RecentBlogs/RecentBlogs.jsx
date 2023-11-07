import RecentBlog from "./RecentBlog";


const RecentBlogs = ({blogs}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-5 md:ml-20 mt-10">
            {
                blogs.slice(0,6).map(blog=> <RecentBlog key={blog._id} blog={blog}></RecentBlog>)
            }
        </div>
    );
};

export default RecentBlogs;