import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperMovie = (props) => {
  return (
    <div className="px-5 pt-5 pb-1 sm:px-12 md:px-16 lg:px-24 xl:px-32 mx-auto bg-slate-200">
      <div className={`${props.kelas}`}>
        <div className="font-bold text-xl mb-2 flex items-center justify-between ">
          <div>
            Movie <span className="text-red-900">{props.title}</span>
          </div>
          <Link
            to={`/movie/${props.id}`}
            state={{ movieData: props }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}>
            <div className="font-normal text-sm flex items-center gap-1 cursor-pointer">
              Selengkapnya{' '}
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <Swiper
          className="mySwiper text-white justify-center mx-auto "
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 8,
            },
          }}>
          {props.data.map((movie, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center ">
              <Link
                to={`/movie/detail/${movie.id}`}
                state={movie.id}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}>
                <img src={`${process.env.REACT_APP_BASEIMGURL500}/${movie.poster_path}`} alt={movie.title} className={`rounded-lg`} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperMovie;
