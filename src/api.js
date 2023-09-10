import axios from "axios";

const instance = axios.create({
    //baseURL: "http://localhost/aplicativo-api/public/api"
    baseURL: "https://rickandmortyapi.com/api"
});

export const GetPersonajes = async()=>{
    //const url = "/personajes"
    const url = "/character"
    const response = await instance.get(url);
    return response.data.results;
}