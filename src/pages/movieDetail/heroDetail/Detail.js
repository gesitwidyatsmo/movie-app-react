import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieDetail, getMovieCredits, getMovieVideo, getMovieSimilar } from '../../../api';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoPopup from '../../../components/videoPopup/VideoPopup';
import Footer from '../../../components/footer/Footer';
import ButtonRating from '../../../components/buttons/ButtonRating';

import 'swiper/css';
import './style.css';
import ConverRuntim from '../../../utils/converterRuntime/ConverRuntim';

const Detail = () => {
  const location = useLocation();
  const id = location.state;
  const [movie, setMovie] = useState([]);
  const [credit, setCredit] = useState([]);
  const [video, setVideo] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const movieResult = await getMovieDetail(id);
        const creditResult = await getMovieCredits(id);
        const videoResult = await getMovieVideo(id);
        const SimilarResult = await getMovieSimilar(id);

        setMovie(movieResult);
        setCredit(creditResult);
        setVideo(videoResult);
        setSimilar(SimilarResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(id);
  }, [id]);

  return (
    <div className="relative">
      <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`} alt={''} className="xl:h-screen sm:w-full object-cover opacity-75" />
      <div className="opacity-layer"></div>
      <div className="absolute top-20 sm:top-28 md:top-48 xl:top-56 px-8 sm:px-20 md:px-36 lg:px-48 w-full">
        <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-9">
          <img src={`${process.env.REACT_APP_BASEIMGURL500}/${movie.poster_path}`} alt={movie.title} className="rounded-lg h-48 sm:h-72 md:h-64 lg:h-[350px] xl:h-96" />
          <div className="text-white ">
            <div className="font-bold text-xl sm:text-2xl lg:text-3xl">{movie.original_title}</div>
            <div className="font-sans font- italic hidden xl:block">{movie.tagline}</div>
            <div className="text-sm sm:text-lg sm:mt-0 mt-1 ">
              <ButtonRating rating={movie.vote_average} vote={movie.vote_count} />
            </div>
            <div className="text-white sm:mt-2 ">
              <div className="font-bold text-lg hidden xl:block">Overview</div>
              <div className="text-base font-light leading-[18px] hidden lg:block">{movie.overview}</div>
            </div>
            <div className="text-[11px] sm:text-sm sm:mt-0 py-4">
              {movie && movie.genres
                ? movie.genres.slice(0, 3).map((genre, i) => (
                    <button key={i} className="mr-2 mb-2 hover:brightness-110 hover:animate-pulse font-bold py-2 px-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 text-white">
                      {genre.name}
                    </button>
                  ))
                : 'No genres available'}
            </div>

            <div className="text-sm sm:text-lg sm:mt-0">Runtime: {ConverRuntim(movie.runtime)}</div>

            <div className="text-sm sm:text-lg sm:mt-0 mt-1">Status: {movie.status}</div>
          </div>
        </div>

        <div className="text-white mt-5 sm:mt-10 block lg:hidden">
          <div className="font-bold text-lg sm:text-2xl ">Overview</div>
          <div className="text-xs font-light leading-[18px] mt-2 sm:text-xs sm:leading-5 sm:mt-4">{movie.overview}</div>
        </div>
        <div className="text-white mt-5 sm:mt-10">
          <div className="font-bold text-lg sm:text-2xl ">Top Caster</div>
          <div className="mt-2 sm:mt-4">
            <Swiper
              slidesPerView={4}
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
              }}
              spaceBetween={5}
              className="mySwiper">
              {credit && credit.cast
                ? credit.cast.slice(0, 10).map((cast, i) => (
                    <SwiperSlide key={i}>
                      <img src={`${process.env.REACT_APP_BASEIMGURL500}/${cast.profile_path}`} alt="" className="grup rounded-xl brightness-75 hover:brightness-105" />
                      <div className="text-[10px] text-center font-semibold sm:text-sm mt-2">
                        {cast.name}
                        <span className="block text-red-400">{cast.character}</span>
                      </div>
                    </SwiperSlide>
                  ))
                : 'No Cast Available'}
            </Swiper>
          </div>
        </div>
        <div className="text-white mt-5 sm:mt-10">
          <div className="font-bold text-lg sm:text-2xl ">Official Video</div>
          <div className="text-xs font-light leading-[18px] mt-2 sm:mt-4">
            <div className="videos">
              <Swiper
                slidesPerView={2}
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={5}
                className="mySwiper">
                {video.map((videos, i) => (
                  <div key={videos.id} className="videoItem">
                    <SwiperSlide key={i}>
                      <div className="videoThumbnail relative flex group items-center justify-center">
                        <img src={`https://img.youtube.com/vi/${videos.key}/mqdefault.jpg`} alt="" className="h-full w-full" />
                        <div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                          onClick={() => {
                            setVideoId(videos.key);
                            setShow(true);
                          }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-7 h-7 md:w-10 md:h-10">
                            <path d="M7.75194 5.43872L18.2596 11.5682C18.4981 11.7073 18.5787 12.0135 18.4396 12.252C18.3961 12.3265 18.3341 12.3885 18.2596 12.432L7.75194 18.5615C7.51341 18.7006 7.20725 18.62 7.06811 18.3815C7.0235 18.305 7 18.2181 7 18.1296V5.87061C7 5.59446 7.22386 5.37061 7.5 5.37061C7.58853 5.37061 7.67547 5.39411 7.75194 5.43872Z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center sm:text-sm mt-2">{videos.name}</div>
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="text-white mt-5 sm:mt-10">
          <div className="font-bold text-lg sm:text-2xl ">Simillar Movie</div>
          <div className="text-xs font-light leading-[18px] mt-2 sm:mt-4">
            <Swiper
              slidesPerView={3}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 6,
                },
              }}
              spaceBetween={8}>
              {similar
                .filter((sim) => sim.poster_path)
                .map((sim, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      to={`/movie/detail/${sim.id}`}
                      state={sim.id}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}>
                      <img src={`${process.env.REACT_APP_BASEIMGURL500}/${sim.poster_path}`} alt="" className="rounded-lg" />
                      <div className="mt-2 text-center font-base line-clamp-2 sm:text-sm">{sim.title}</div>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        <div className="mx-[-32px] mt-10 sm:mt-10 sm:mx-[-80px] md:mx-[-144px] lg:mx-[-192px]">
          <Footer />
        </div>
      </div>
      <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
    </div>
  );
};

export default Detail;
