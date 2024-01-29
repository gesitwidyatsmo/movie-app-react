/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import fetchData from '../../utils/movieList/MovieList';
import Search from '../search/Search';
import Logo from '../../assets/img/logo.png';
import './style.css';
import Humburger from '../humburger/Humburger';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    const fetchDataAndUse = async () => {
      try {
        const movieDataResult = await fetchData();
        setMovieData(movieDataResult);
      } catch (error) {
        console.error('Error using fetched data:', error);
      }
    };
    fetchDataAndUse();
  }, []);

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const keyword = searchRef.current.value;
      navigate(`/movie/search/${keyword}`);
      // console.log('Search query:', keyword);
    }
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 sm:px-12 md:px-16 lg:px-24 xl:px-32 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" onClick={() => navigate('/')}>
          <img src={Logo} className="h-8 " alt="GWA Movie" />
          <div className="self-center text-xs font-semibold whitespace-nowrap dark:text-white hidden sm:block">
            GWA <span className="block">Movie</span>
          </div>
        </div>
        <div className="flex md:order-2 gap-4 items-center">
          <div className="searc">
            {/* <Search onKeyDown={handleSearch} inputRef={searchRef}/> */}
            <div className="mx-auto max-w-md">
              <form action="" className="relative mx-auto w-max">
                <input
                  type="search"
                  className="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent outline-none focus:w-48 focus:cursor-text focus:border-white focus:pl-12 focus:pr-4 text-white"
                  ref={searchRef}
                  onKeyDown={handleSearch}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-y-0 my-auto h-8 w-10 border-r border-transparent stroke-white px-2.5 peer-focus:border-white peer-focus:stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>
            </div>
          </div>
          <div className="md:hidden">
            <Humburger toggleMenu={toggleMenu} />
          </div>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            {movieData.map((movie, i) => (
              <li key={i}>
                <NavLink
                  to={`/movie/${movie.id}`}
                  state={{ movieData: movie }}
                  className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0   active:text-blue-600 [&.active]:text-red-500 [&.active]:font-semibold`}>
                  {movie.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`absolute w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md z-50 right-2 text-center ${
          isMenuOpen ? 'block' : 'hidden'
        }`}>
        {movieData.map((movie, i) => (
          <NavLink key={i} to={`/movie/${movie.id}`} state={{ movieData: movie }} className="col-span-2 text-lg font-bold capitalize rounded-md cursor-pointer [&.active]:text-red-500 [&.active]:font-semibold">
            {movie.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Header;
