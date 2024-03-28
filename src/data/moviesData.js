const API_KEY = "87227e85299796fb4f134e6af5a95925" ;
const baseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = `?api_key=${API_KEY}&language=en-US&page=`; 

export const moviesData = async (pageId=1, urlCategory="now_playing") => {
    const url = baseUrl + urlCategory + apiKey + pageId.toString();
    const res = await fetch(url);
    const data = res.json();
    return data;
};

const baseUrlAll = "https://api.themoviedb.org/3/discover/movie"
const apiKeyAll = `?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=`;
const sort = "&sort_by=popularity.desc";

export const moviesDataAll = async (pageId=1) => {
    const url = baseUrlAll + apiKeyAll + pageId.toString() + sort;
    const res = await fetch(url);
    const data = res.json();
    return data;
};

