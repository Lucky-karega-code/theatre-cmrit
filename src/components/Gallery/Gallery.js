import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Gallery.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {

  const [windowSize, setWindowSize] = useState([
    window.naturalWidth,
    window.naturalHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.naturalWidth, window.naturalHeight]);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const count = (windowSize[0] <= 500)? 1 : 3 ;  

  const galleryArray = [
    {
      "key": 1,
      "url": "https://res.cloudinary.com/dyybkgbka/image/upload/fl_preserve_transparency/v1731825872/1718365868616_vwrkn9_Banner_tall_nkoilh.jpg",
      "desc": "photua"
    },
    {
      "key": 2,
      "url": "https://res.cloudinary.com/dyybkgbka/image/upload/fl_preserve_transparency/v1731825823/Screenshot_2024-10-04-18-44-26-158_com.facebook.lite_gagwc5_Banner_tall_htzkxc.jpg",
      "desc": "photub"
    },
    {
      "key": 3,
      "url": "https://res.cloudinary.com/dyybkgbka/image/upload/fl_preserve_transparency/v1731823832/IMG-20230629-WA0011_l5lual.jpg",
      "desc": "photuc"
    },
    {
      "key": 4,
      "url": "https://res.cloudinary.com/dyybkgbka/image/upload/fl_preserve_transparency/v1731825795/IMG-20230527-WA0013_lozhop_Banner_tall_fayqu1.jpg?_s=public-apps",
      "desc": "photud"
    },
    {
      "key": 5,
      "url": "https://res.cloudinary.com/dyybkgbka/image/upload/fl_preserve_transparency/v1731823819/IMG_7695_rzsver.jpg?_s=public-apps",
      "desc": "photue"
    },
    {
      "key": 6,
      "url": "https://res.cloudinary.com/dyybkgbka/image/upload/fl_preserve_transparency/v1731825501/1X4A0234_alougq_Banner_tall_nlcwvq.jpg",
      "desc": "photuf"
    },
    {
      "key": 7,
      "url": "https://res.cloudinary.com/dyybkgbka/image/upload/fl_preserve_transparency/v1731825498/WhatsApp_Image_2020-08-02_at_4.37.05_PM_2_kzoajt_Banner_tall_vggn9l.jpg",
      "desc": "photui"
    },
    {
      "key": 8,
      "url": "https://res.cloudinary.com/dyybkgbka/image/upload/fl_preserve_transparency/v1731823830/EmbeddedImage_3_r9dkun.jpg",
      "desc": "photui"
    }
    
  ];

  return (
    <div className='gallery'>
      <div className='gallery-head'>
        Gallery
      </div>
      <Swiper
        effect={'coverflow'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={count}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#a3dae0",
          "--swiper-pagination-bullet-inactive-color": "#999999",
        }}
      >
      {
        galleryArray.map(galleryArray => (
          <SwiperSlide>
            <img src={galleryArray.url} alt={galleryArray.desc} />
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  );
}
