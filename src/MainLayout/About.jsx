import Lottie from "lottie-react";
import animation from '../../public/iAju03SE80.json'

const About = () => {
    return (
        <div>
            {/* <h1 className="text-blue-500 text-5xl text-center font-bold mt-10">ALL YOU NEED TO KNOW ABOUT US</h1> */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <Lottie className="flex-1" animationData={animation}></Lottie>
                <div className="flex-1">
                    <h1 className="text-black text-4xl font-semibold text-center">About <span className="text-blue-500">BlogBloom</span>: Connecting, Inspiring, and Sharing in the Digital Realm</h1>
                    <p className="mt-5 md:w-4/5 mx-auto">Welcome to BlogBloom, a digital haven where ideas, inspiration, and experiences converge to create a vibrant tapestry of knowledge and human connection. In an ever-evolving online landscape, this blog stands as a testament to the power of words, images, and the passion that drives content creation. Our mission is simple yet profound: to connect with our readers on a personal level, inspire them through diverse and engaging content, and share knowledge that enriches lives.

                        BlogBloom is the brainchild of Masud Rahman,.As a passionate enthusiast of creating blogs, I embarked on this blogging journey to not only share my insights and experiences but also to foster a dynamic online community where like-minded individuals can find information, inspiration, and a sense of belonging. What sets us apart is our commitment to authenticity, empathy, and the belief that every reader is a valued member of our virtual family.</p>
                </div>
            </div>
        </div>
    );
};

export default About;