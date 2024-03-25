const API_KEY = "87227e85299796fb4f134e6af5a95925" ;
const baseUrl = "https://api.themoviedb.org/3/movie/"
const apiKey = `?api_key=${API_KEY}&language=en-US&page=`; 

export const moviesData = async (pageId=1, urlCategory="now_playing") => {
    const url = baseUrl + urlCategory + apiKey + pageId.toString();
    const res = await fetch(url);
    const data = res.json();
    return data;
};