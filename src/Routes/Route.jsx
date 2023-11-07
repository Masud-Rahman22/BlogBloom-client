import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/blogs/sort')
            },
            {
                path: "/addBlog",
                element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
            },
            {
                path: "/updates/:id",
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/updates/${params.id}`)
            },
            {
                path: "/allBlogs",
                element: <AllBlogs></AllBlogs>,
                loader: ()=> fetch('http://localhost:5000/blogs')
            },
            {
                path: "/featuredBlogs",
                element: <FeaturedBlogs></FeaturedBlogs>
            },
            {
                path: "/wishlist",
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path: '/blogDetails/:id',
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/blogDetails/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;