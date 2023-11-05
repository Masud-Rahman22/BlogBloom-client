// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pic1 from '../../../public/515331-PIWSNP-964.jpg'
import pic2 from '../../../public/515374-PIL93P-445.jpg'
import pic3 from '../../../public/517071-PIXH41-841.jpg'
import pic4 from '../../../public/524627-PIWZED-672.jpg'
const Banner = () => {
    return (
        <div>
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
            <div className='md:w-3/4 mx-auto' data-aos="fade-up"
                data-aos-duration="3000">
                <h1 className='text-4xl font-semibold text-center mt-10 font-merienda'><span className='text-blue-500 font-merienda'>Discover</span> Endless Inspiration</h1>
                <p className='text-xl font-extralight text-center mt-5'>Unleash your curiosity and immerse yourself in a world of captivating stories, insightful articles, and thought-provoking ideas. Our blog is your gateway to inspiration, knowledge, and endless possibilities. Whether you are a seasoned reader or just starting your journey, we have got something for everyone.</p>
                <div className='flex items-center justify-center mt-10'>
                <button className="btn btn-outline btn-secondary font-merienda">Explore Articles</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
{/* <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} className="max-w-xl rounded-lg" />
                <div>
                    <h1 className="text-4xl font-bold font-merienda"><span className='text-blue-500 font-merienda'>Discover</span> Endless Inspiration</h1>
                    <p className="py-6 text-base font-merienda">Unleash your curiosity and immerse yourself in a world of captivating stories, insightful articles, and thought-provoking ideas. Our blog is your gateway to inspiration, knowledge, and endless possibilities. Whether you are a seasoned reader or just starting your journey, we have got something for everyone.</p>
                    <button className="btn btn-outline btn-secondary font-merienda">Explore Articles</button>
                </div>
            </div>
        </div> */}