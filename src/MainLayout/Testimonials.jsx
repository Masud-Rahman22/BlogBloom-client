import pic1 from '../../public/customer Images/portrait-friendly-looking-happy-attractive-male-model-with-moustache-beard-wearing-trendy-transparent-glasses-smiling-broadly-while-listening-interesting-story-waiting-mom-give-meal.jpg'
import pic2 from '../../public/customer Images/smiling-handsome-man-jacket-posing.jpg'
import pic3 from '../../public/customer Images/young-businessman-happy-expression.jpg'
import pic4 from '../../public/customer Images/happiness-people-concept-cute-caucasian-teenage-girl-wearing-black-rectangular-spectacles-casual-polo-shirt-smiling-joyfully.jpg'
import pic5 from '../../public/customer Images/portrait-serious-young-businessman-glasses.jpg'
import Marquee from "react-fast-marquee";
const Testimonials = () => {
    return (
        <div className="mt-14 lg:mt-44">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-blue-500 text-3xl md:text-5xl font-semibold font-merienda mt-5">What Our Readers Say</h1>
                <p className="text-black font-extralight text-sm md:text-lg mt-5  lg:w-3/4 text-center">I can not thank the creators of this blog enough. It is not just informative; it is a source of inspiration. I have implemented some of the ideas from the blog into my own life, and the results have been amazing.</p>
                <button className="btn btn-outline border-white text-white mt-5 hover:bg-orange-400">Read More</button>
            </div>
            <Marquee autoFill={true} pauseOnHover={true}>
                <div className="flex justify-evenly items-center mt-10">
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mr-5">
                        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                            <img
                                src={pic1}
                                alt="Tom Davidson"
                                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Tom Davidson
                                    </h5>
                                    <div className="flex items-center gap-0 5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                                    Student
                                </p>
                            </div>
                        </div>
                        <div className="p-0 mb-6">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                I stumbled upon this blog, and it is been a game-changer for me. The articles are not only informative but also engaging. I have learned so much and look forward to new posts every week!
                            </p>
                        </div>
                    </div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mr-5 mt-1">
                        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                            <img
                                src={pic2}
                                alt="John Holland"
                                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        John Holland
                                    </h5>
                                    <div className="flex items-center gap-0 5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                                    Small Business Owner
                                </p>
                            </div>
                        </div>
                        <div className="p-0 mb-6">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                I have been following this blog for a while now, and it has helped me professionally and personally. The content is practical and relatable. It is like having a knowledgeable friend to guide you through life challenges.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mr-5 mt-1">
                        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                            <img
                                src={pic3}
                                alt="Jim Smith"
                                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Jim Smith
                                    </h5>
                                    <div className="flex items-center gap-0 5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                                    freelancer
                                </p>
                            </div>
                        </div>
                        <div className="p-0 mb-6">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                I can not thank the creators of this blog enough. It is not just informative; it is a source of inspiration. I have implemented some of the ideas from the blog into my own life, and the results have been amazing.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mr-5 mt-1">
                        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                            <img
                                src={pic4}
                                alt="Angelina Jolie"
                                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Angelina Jolie
                                    </h5>
                                    <div className="flex items-center gap-0 5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                                    Student
                                </p>
                            </div>
                        </div>
                        <div className="p-0 mb-6">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                As an avid reader, I have explored many blogs, but this one truly stands out. The content is top-notch, well-researched, and beautifully written. It is become my go-to source for fresh insights and ideas.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mr-5 mt-1">
                        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                            <img
                                src={pic5}
                                alt="Abel Soprano"
                                className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        Abel Soprano
                                    </h5>
                                    <div className="flex items-center gap-0 5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                                    Teacher
                                </p>
                            </div>
                        </div>
                        <div className="p-0 mb-6">
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                I can not express how much I have benefited from BlogBloom. As a regular reader, I have been consistently impressed with the quality and diversity of the content. The articles are well-researched.
                            </p>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Testimonials;