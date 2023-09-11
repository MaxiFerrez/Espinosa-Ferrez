import axios from "axios";

const instance = axios.create({
    //baseURL: "http://localhost/aplicativo-api/public/api"
    //baseURL: "https://rickandmortyapi.com/api"
    baseURL: "https://apisimpsons.fly.dev/api"
});

export const GetPersonajes = async()=>{
    const url = "/personajes?limit=635&page=1"
    const response = await instance.get(url);
    return response.data.docs;
}

export const GetLugares = async()=>{
    const url = "/location"
    const response = await instance.get(url);
    return response.data.results;
}