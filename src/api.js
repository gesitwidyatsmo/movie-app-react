/* eslint-disable no-unused-vars */
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMoviePopuler = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  // console.log({ movie: movie.data.results });
  return movie.data.results;
};

export const getMovieNowPlaying = async () => {
  const movie = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}`);
  return movie.data.results;
};

export const getMovieUpcoming = async () => {
  const movie = await axios.get(`${baseUrl}/movie/upcoming?api_key=${apiKey}`);
  return movie.data.results;
};

export const getMovieTopRating = async () => {
  const movie = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`);
  return movie.data.results;
};

export const getMovieMore = async (id, page) => {
  const movie = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}&page=${page}]`);
  return movie.data.results;
};

export const getMovieDetail = async (id) => {
  const movie = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
  return movie.data;
  // console.log(movie.data);
};

export const getMovieCredits = async (id) => {
  const movie = await axios.get(`${baseUrl}/movie/${id}/credits?api_key=${apiKey}`);
  return movie.data;
  // console.log(movie.data);
};

export const getMovieVideo = async (id) => {
  const movie = await axios.get(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}`);
  return movie.data.results;
  // console.log(movie.data);
};

export const getMovieSimilar = async (id) => {
  const movie = await axios.get(`${baseUrl}/movie/${id}/similar?api_key=${apiKey}`);
  return movie.data.results;
  // console.log(movie.data);
};

export const getSearchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`);
  // console.log(search);
  return search.data.results;
};
