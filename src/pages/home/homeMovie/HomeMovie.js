import React, { useEffect, useState } from 'react';
import SwiperMovie from '../../../components/swiper/SwiperMovie';
import fetchData from '../../../utils/movieList/MovieList';

const HomeMovie = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchDataAndUse = async () => {
      try {
        const movieDataResult = await fetchData();
        setMovieData(movieDataResult);
        // console.log(movieData);
      } catch (error) {
        console.error('Error using fetched data:', error);
      }
    };
    fetchDataAndUse();
  }, []);

  // console.log(movieData);

  return (
    <div className="bg-slate-200">
      {movieData.map((movie, i) => (
        <div key={i}>
          <SwiperMovie id={movie.id} title={movie.title} data={movie.data} kelas={movie.kelas} />
        </div>
      ))}
    </div>
  );
};

export default HomeMovie;
