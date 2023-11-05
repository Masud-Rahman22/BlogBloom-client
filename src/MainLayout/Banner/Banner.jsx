

import animation from '../../../public/animation_lol7hhg6.json'
import Lottie from 'lottie-react';


const Banner = () => {
    return (
        <div>
            <div className="min-h-screen">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
                    <Lottie className='flex-1' animationData={animation}></Lottie>
                    {/* <img src={picture} className="max-w-sm rounded-lg" /> */}
                    <div className='flex-1 mx-auto text-left lg:ml-10' data-aos="fade-right">
                        <h1 className='text-4xl font-semibold mt-10 font-merienda'><span className='text-blue-500 font-merienda'>Discover</span> Endless Inspiration</h1>
                        <p className='text-xl font-extralight mt-5'>Unleash your curiosity and immerse yourself in a world of captivating stories, insightful articles, and thought-provoking ideas. Our blog is your gateway to inspiration, knowledge, and endless possibilities. Whether you are a seasoned reader or just starting your journey, we have got something for everyone.</p>
                        <div className='flex items-center mt-10'>
                            <button className="btn btn-outline btn-secondary font-merienda">Explore Articles</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;
