const API_KEY = "87227e85299796fb4f134e6af5a95925" ;
const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`;

export const genresList = async () => {
    const res = await fetch(url);
    return res.json();
};

