const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
};

export default endpoints;