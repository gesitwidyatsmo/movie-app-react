import { getMoviePopuler, getMovieNowPlaying, getMovieUpcoming, getMovieTopRating } from '../../api';

const fetchData = async () => {
  try {
    const popularMovies = await getMoviePopuler();
    const nowPlayingMovies = await getMovieNowPlaying();
    const upcomingMovies = await getMovieUpcoming();
    const topRatedMovies = await getMovieTopRating();

    const movieList = [
      { id: 'popular', title: 'Populer', kelas: 'mt-10', data: popularMovies },
      { id: 'now_playing', title: 'Now Playing', kelas: 'mt-0', data: nowPlayingMovies },
      { id: 'upcoming', title: 'Up Coming', kelas: 'mt-0', data: upcomingMovies },
      { id: 'top_rated', title: 'Top Rating', kelas: 'mb-10', data: topRatedMovies },
    ];

    return movieList;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};

export default fetchData;
