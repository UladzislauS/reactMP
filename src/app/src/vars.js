export const IMAGE_URL = (path) => `https://image.tmdb.org/t/p/w500${path}`;
export const SEARCH_URL = (query) => `https://api.themoviedb.org/3/search/movie?api_key=5425801f81cc0f61166c3d37b266cdd1&language=en-US&page=1&include_adult=true&query=${query}`;
export const GET_MOVIE_URL = (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=5425801f81cc0f61166c3d37b266cdd1&language=en-US`;
export const GET_RECOMMENDED_URL = (id) => `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5425801f81cc0f61166c3d37b266cdd1&language=en-US&page=1`;