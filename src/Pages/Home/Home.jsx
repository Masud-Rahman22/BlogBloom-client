import { useLoaderData } from "react-router-dom";
import About from "../../MainLayout/About";
import Banner from "../../MainLayout/Banner/Banner";
import Testimonials from "../../MainLayout/Testimonials";
import RecentBlogs from "../../MainLayout/RecentBlogs/RecentBlogs";
import Newsletter from "../../MainLayout/Newsletter";
import SupportSection from "../../MainLayout/SupportSection/SupportSection";

const Home = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <RecentBlogs blogs={blogs}></RecentBlogs>
            <Newsletter></Newsletter>
            <Testimonials></Testimonials>
            <SupportSection></SupportSection>
            <About></About>
        </div>
    );
};

export default Home;