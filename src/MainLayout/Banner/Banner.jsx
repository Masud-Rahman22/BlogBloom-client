
import animation from '../../../public/animation_lol7hhg6.json'
import Lottie from 'lottie-react';
import { motion } from "framer-motion"
const Banner = () => {
    return (
        <div>
            <div className="min-h-screen">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
                    <Lottie className='flex-1' animationData={animation}></Lottie>
                    <motion.div className='flex-1 mx-auto text-left lg:ml-10'
                    >
                        <h1 className='text-4xl font-semibold mt-10 font-merienda'><span className='text-blue-500 font-merienda'>Discover</span> Endless Inspiration</h1>
                        <p className='text-xl font-extralight mt-5'>Unleash your curiosity and immerse yourself in a world of captivating stories, insightful articles, and thought-provoking ideas. Our blog is your gateway to inspiration, knowledge, and endless possibilities. Whether you are a seasoned reader or just starting your journey, we have got something for everyone.</p>
                        <div className='flex items-center mt-10'>
                            <motion.button whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                                whileTap={{ scale: 0.9 }} className='p-3 bg-blue-400 text-white rounded-lg'>Explore Articles</motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>


        </div>
    );
};

export default Banner;
