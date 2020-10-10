import axios from "axios";
const key = `249034089965cfc778893cbdb0f537e5`;
const fetchArticlesByQuery = (searchQuery) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchQuery}`
    )
    .then((response) => response.data.results);
};
const fetchPopularMovie = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
    .then((response) => response.data.results);
};
const fetchMovieByID = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    )
    .then((response) => response.data);
};
const fetchMovieByCast = (id) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`)
    .then((response) => response.data);
};
const fetchMovieByReview = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
    )
    .then((response) => response.data);
};
export default {
  fetchArticlesByQuery,
  fetchPopularMovie,
  fetchMovieByID,
  fetchMovieByCast,
  fetchMovieByReview,
};
