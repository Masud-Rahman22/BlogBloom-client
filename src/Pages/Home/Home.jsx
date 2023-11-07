import { useLoaderData } from "react-router-dom";
import About from "../../MainLayout/About";
import Banner from "../../MainLayout/Banner/Banner";
import Blogging from "../../MainLayout/Blogging";
import Testimonials from "../../MainLayout/Testimonials";
import RecentBlogs from "../../MainLayout/RecentBlogs/RecentBlogs";
import Newsletter from "../../MainLayout/Newsletter";

const Home = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs blogs={blogs}></RecentBlogs>
            <Newsletter></Newsletter>
            <Testimonials></Testimonials>
            <Blogging></Blogging>
            <About></About>
        </div>
    );
};

export default Home;