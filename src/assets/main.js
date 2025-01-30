import Movie from "./js/api/movies";
import Serie from "./js/api/series";
import Favorites from "./js/api/Favorites";
import { getUserQuery } from "./utils/user-search";

const apiKey = import.meta.env.VITE_API_KEY;
const nowPlayMovie = import.meta.env.VITE_URL_MOVIE_NOW;
const nowPlaySerie = import.meta.env.VITE_URL_SERIE_NOW;

const movieContainer = document.querySelector("#movies");
const serieContainer = document.querySelector("#series");
const favoritesContainer = document.querySelector("#favorites");

const movie = new Movie(apiKey);
movie.nowPlaying(nowPlayMovie, movieContainer);

const serie = new Serie(apiKey);
serie.nowPlaying(nowPlaySerie, serieContainer);

const favorites = new Favorites('favorites');
favorites.userFavorites(favoritesContainer);

getUserQuery();