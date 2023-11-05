

import About from "../../MainLayout/About";
import Banner from "../../MainLayout/Banner/Banner";
import Blogging from "../../MainLayout/Blogging";
import Testimonials from "../../MainLayout/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Testimonials></Testimonials>
            <About></About>
            <Blogging></Blogging>
        </div>
    );
};

export default Home;