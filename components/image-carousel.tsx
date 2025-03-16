import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Button } from './ui/button';

const ImageCarousel = () => {
    const swiper = useSwiper()

    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    
    // State to track the currently active slide index
    const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(()=>{
    //     setInterval(()=>{
    //         swiper.slideNext()
    //     }, 1000)
    // },[])

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop
                autoplay={{
                    delay: 1000
                }}
                className="mySwiper"
                on={{
                  slideChange(swiper) {
                      console.log(swiper)
                  },
                }}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        {({isActive})=>(
                            <div
                            style={{transformOrigin: 'bottom'}}
                            className={`bg-emerald-700 w-full scale-y-50 h-[10rem] ${isActive && 'scale-y-150' }  duration-500 ease-in-out`}
                        >
                            Slide {img}
                        </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <Button onClick={() => swiper.slideNext()}>Next</Button>
        </>
    );
}

export default ImageCarousel;
