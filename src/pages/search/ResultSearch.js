import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSearchMovie } from '../../api';

const ResultSearch = () => {
  const { keyword } = useParams();
  const [keyResult, setKeyResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSearchMovie(keyword);

      setKeyResult(result);
    };
    fetchData();
  }, [keyword]);

  console.log(keyResult);

  return (
    <div className="bg-white px-10 sm:px-16 lg:px-24 xl:px-32 py-10 sm:py-24">
      <div className="mx-auto max-w-2xl lg:max-w-7xl ">
        <div className="font-bold text-xl mb-5 sm:text-2xl md:text-3xl">
          Hasil Pencarian <span className="text-red-900">{keyword}</span>
        </div>

        <div
          className="grid grid-cols-3 gap-x-2 gap-y-2 
          sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-3 
          justify-center flex-auto">
          {keyResult.map((movie, i) => (
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
        {/* <div onClick={handleButtonClick}>
          <ButtonMore />
        </div> */}
      </div>
    </div>
  );
};

export default ResultSearch;
