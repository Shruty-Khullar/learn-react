import axios from "axios";
const api = axios.create({
    baseURL: "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1",
    //baseURL: "https://www.omdbapi.com/"
});

export const getMovie = () => {
    //bydefault get baseURL
    return api.get("");
    //same as baseURL + params
    // return api.get("?i=tt3896198&apikey=1c12799f&s=titanic&page=1");

}