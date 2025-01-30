import Serie from "../api/series";
import Movie from "../api/movies";
import Favorites from "../api/Favorites";
import getId from "../../utils/getId";
import Search from "../api/search";
import { getUserQuery } from "../../utils/user-search";

const apiKey = import.meta.env.VITE_API_KEY;
const nowPlayMovie = import.meta.env.VITE_URL_MOVIE_NOW;
const nowPlaySerie = import.meta.env.VITE_URL_SERIE_NOW;
const results = document.querySelector("#results");

const query = getId("query");
switch (query) {
    case "series":
        const serie = new Serie(apiKey);
        serie.fullContent(nowPlaySerie, results);
        break;
    case "movies":
        const movie = new Movie(apiKey);
        movie.fullContent(nowPlayMovie, results);
        break;
    case "favorites":
        const favorites = new Favorites(query);
        favorites.fullFavorites(results);
        break;
    default:
        const search = new Search(query, null);
        search.getFullData(results);
        break;
}

getUserQuery();