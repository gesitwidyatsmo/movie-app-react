import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Thumbs } from 'swiper/modules';
import { getMoviePopuler } from '../../../api';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [moviePopular, setMoviePopular] = useState([]);

  useEffect(() => {
    getMoviePopuler().then((result) => {
      setMoviePopular(result);
    });
  }, []);

  //   console.log({ moviePopular: moviePopular });

  return (
    <div className="relative mx-auto">
      <div className="bg-gray-900 cursor-pointer">
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Autoplay, Thumbs]}
          className="">
          {moviePopular.map((movie, i) => (
            <SwiperSlide key={i} className="relative">
              <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`} alt={movie.title} className="xl:h-screen xl:w-full object-cover brightness-50" />
              <div className="absolute px-6 mx-auto top-7 left-2 right-0 text-white text-base sm:p-12 md:p-16 lg:p-28">
                <div className="font-bold line-clamp-1 max-w-56 sm:text-xl sm:max-w-max md:text-3xl lg:text-4xl xl:text-5xl">{movie.original_title}</div>
                <div className="mt-1 text-sm line-clamp-3 max-w-56 sm:max-w-[450px] md:text-lg md:max-w-[500px] lg:max-w-[800px] lg:text-xl xl:mt-3 xl:text-xl xl:max-w-[950px] sm:line-clamp-4 lg:line-clamp-5">{movie.overview}</div>
                <div className="mt-5  ">
                  <Link to={`/movie/detail/${movie.id}`} state={movie.id}>
                    <div className="bg-red-900 hover:bg-red-950 hover:font-semibold font-normal p-3 text-xs  w-28 text-center hover: rounded-full sm:mt-12 md:w-40 md:text-lg xl:mt-24 xl:text-xl xl:w-40 xl:p-3">Watch Now</div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-10 right-5 sm:right-11 md:right-14 lg:right-[90px] xl:right-32">
        <div className="w-24 sm:w-44 md:w-72 lg:w-[500px] cursor-pointer xl:w-[500px]">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Autoplay, Thumbs]}
            className="absolute top-0 w-full">
            {moviePopular.map((movie, i) => (
              <SwiperSlide key={i} className="">
                <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
