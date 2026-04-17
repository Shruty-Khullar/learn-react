import axios from 'axios' 
const api = axios.create({
    baseURL: "https://restcountries.com/v3",
});

//HTTP GET METHOD
export const getCountryData = () => {
    return  api.get('/all?fields=name,population,region,capital,flags');
}

//HTTP GET for each country
export const getCountryDataDetail = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,currencies,tld,languages,flags,borders`);
}