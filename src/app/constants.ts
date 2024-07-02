const API_KEY = process.env.API_KEY;

const mainUrl = "https://api.themoviedb.org/3";

const movieMainUrl = `${mainUrl}/movie/`;

const searchMainUrl = `${mainUrl}/search/movie`;

const imageMainUrl = `https://image.tmdb.org/t/p/original/`;

export { API_KEY, mainUrl, movieMainUrl, searchMainUrl, imageMainUrl };
