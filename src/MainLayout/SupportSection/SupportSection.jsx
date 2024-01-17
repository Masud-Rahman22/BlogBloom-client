import Lottie from 'lottie-react';
import mobile from '../../../public/mobile/Animation - 1705326390735.json'
import { motion } from "framer-motion"
const SupportSection = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row-reverse items-center justify-center'>
            <Lottie className='flex-1'  animationData={mobile}></Lottie>
            <div className='flex-1 lg:ml-20'>
                <h1 className='text-5xl font-semibold font-libreFranklin'>REAL SUPPORT</h1>
                <p className='text-base my-3 lg:w-10/12'>Our Happiness Engineers are on hand to help. From live chat and email support to community forums, if you get stuck—or just need a hand—we’re here for you.</p>
                <div className='flex items-center mt-5'>
                            <motion.button whileHover={{
                                scale: 1.2,
                                transition: { duration: 1 },
                            }}
                                whileTap={{ scale: 0.9 }} className='px-10 py-4 bg-black text-white rounded-md'>Get Help</motion.button>
                        </div>
            </div>
            </div>
        </div>
    );
};

export default SupportSection;