const API_KEY = "87227e85299796fb4f134e6af5a95925" ;
const baseUrl = "https://api.themoviedb.org/3/person/"
const apiKey = `?api_key=${API_KEY}&language=en-US`; 

export const actorData = async (actorId) => {
    const url = baseUrl + actorId.toString() + apiKey;
    const res = await fetch(url);
    const data = res.json();
    return data;
};