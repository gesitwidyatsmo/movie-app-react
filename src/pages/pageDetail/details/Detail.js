import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ButtonMore from '../../../components/buttons/ButtonMore';
import { getMovieMore } from '../../../api';

const Detail = () => {
  const location = useLocation();
  const movieData = location.state;
  const { title, data, id } = movieData.movieData;
  const [additionalMovies, setAdditionalMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const handleButtonClick = async () => {
    try {
      const moreMovieData = await getMovieMore(id, currentPage);
      setAdditionalMovies((prevMovies) => [...new Set([...prevMovies, ...moreMovieData])]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching more movie data:', error);
    }
  };

  return (
    <div className="bg-white px-10 sm:px-16 lg:px-24 xl:px-32 py-10 sm:py-24">
      <div className="mx-auto max-w-2xl lg:max-w-7xl ">
        <div className="font-bold text-xl mb-5 sm:text-2xl md:text-3xl">
          Movie <span className="text-red-900">{title}</span>
        </div>

        <div
          className="grid grid-cols-3 gap-x-2 gap-y-2 
          sm:grid-cols-4 md:gap-x-3 md:gap-y-3 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-4 xl:grid-cols-6 xl:gap-x-3 
          justify-center flex-auto">
          {[...data, ...additionalMovies].map((movie, i) => (
            <div key={i} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Link
                  to={`/movie/detail/${movie.id}`}
                  state={movie.id}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}>
                  <img src={`${process.env.REACT_APP_BASEIMGURL500}/${movie.poster_path}`} alt={movie.imageAlt} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div onClick={handleButtonClick}>
          <ButtonMore />
        </div>
      </div>
    </div>
  );
};

export default Detail;
