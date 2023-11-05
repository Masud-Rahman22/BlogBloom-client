// import picture from '../../public/about us/2672335.jpg'
// Import Swiper styles
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pic1 from '../../public/swiper images/515331-PIWSNP-964.jpg'
import pic2 from '../../public/swiper images/515374-PIL93P-445.jpg'
import pic3 from '../../public/swiper images/517071-PIXH41-841.jpg'
import pic4 from '../../public/swiper images/524627-PIWZED-672.jpg'
const Blogging = () => {
    return (
        <div className=''>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-blue-500 text-3xl md:text-5xl font-semibold font-merienda mb-5'>Explore Blogging</h1>
                <p className='text-black font-extralight text-sm md:text-lg mt-5  lg:w-3/4 text-center mb-5'>Blogging is a dynamic and versatile form of online content creation that enables individuals and businesses to connect with a global audience. Bloggers, the creative minds behind these digital journals, regularly craft and publish blog posts, each covering a specific topic or theme that appeals to their target audience. These posts encompass a diverse range of content types, from informative articles and product reviews to personal anecdotes and instructional guides. Bloggers often focus on a particular niche, allowing them to establish authority and credibility within their chosen field, whether it is fashion, technology, travel, or any other area of interest.</p>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='h-[600px]'>
                <SwiperSlide><img className="h-full w-full" src={pic3} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-full w-full" src={pic2} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-full w-full" src={pic1} alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-full w-full" src={pic4} alt="" /></SwiperSlide>
                ...
            </Swiper>
        </div>

    );
};

export default Blogging;