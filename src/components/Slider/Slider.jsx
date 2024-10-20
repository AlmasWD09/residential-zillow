import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Slider.css"
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
      <div className='mt-5'>
          <Swiper
        pagination={{
          clickable: true,
          activeClass: 'pagination-active', //active class add
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">

        <SwiperSlide>
            <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] slider1 rounded-2xl flex justify-end relative'>
            <h1 className='hidden md:block text-white font-bold absolute bottom-3 bg-emerald-900 px-4 py-3 mr-3 rounded-lg'>Single-family-homes</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] slider2 rounded-2xl flex justify-end relative'>
            <h1  className='hidden md:block text-white font-bold absolute bottom-3 bg-emerald-900 px-4 py-3 mr-3 rounded-lg'>townhouses</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] slider3 rounded-2xl flex justify-end relative'>
            <h1  className='hidden md:block text-white font-bold absolute bottom-3 bg-emerald-900 px-4 py-3 mr-3 rounded-lg'>apartments</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] slider4 rounded-2xl flex justify-end relative'>
            <h1  className='hidden md:block text-white font-bold absolute bottom-3 bg-emerald-900 px-4 py-3 mr-3 rounded-lg'>student-housing</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] slider5 rounded-2xl flex justify-end relative'>
            <h1  className='hidden md:block text-white font-bold absolute bottom-3 bg-emerald-900 px-4 py-3 mr-3 rounded-lg'> senior-living-communities</h1>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='h-[40vh] md:h-[55vh] lg:h-[60vh] slider6 rounded-2xl flex justify-end relative'>
            <h1  className='hidden md:block text-white font-bold absolute bottom-3 bg-emerald-900 px-4 py-3 mr-3 rounded-lg'>vacation-rentals</h1>
            </div>
        </SwiperSlide>
    
      </Swiper>
      </div>
    );
};

export default Slider;