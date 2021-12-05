import axios from 'axios';

const API_KEY = '94f6d058bb3cc18de9c35094b7baef12';
const BASE_URL = 'https://api.themoviedb.org/3';
function searchFilm(query) {
  return axios(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  ).then(({ data }) => data.results);
}
function getTrendingMovies() {
  return axios(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    ({ data }) => data.results,
  );
}
function getMoviesDetails(movieId) {
  return axios(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  ).then(data => {
    return data.data;
  });
}
function getMovieCredits(movieId) {
  return axios(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).then(
    ({ data }) => {
      return data.cast;
    },
  );
}
function getMovieReviews(movieId) {
  return axios(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    ({ data }) => data.results,
  );
}
export {
  searchFilm,
  getTrendingMovies,
  getMoviesDetails,
  getMovieCredits,
  getMovieReviews,
};
