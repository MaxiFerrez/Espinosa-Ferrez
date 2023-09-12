import axios from "axios";

const instance = axios.create({
    //baseURL: "http://localhost/aplicativo-api/public/api"
    //baseURL: "https://apisimpsons.fly.dev/api"
    baseURL: "http://localhost/aplicativo-api/public/api"
});

export const GetPersonajes = async()=>{
    const url = "/personajes"
    const response = await instance.get(url);
    return response.data;
}

export const GetTemporadas = async()=>{
    const url = "/temporadas"
    const response = await instance.get(url);
    return response.data;
}