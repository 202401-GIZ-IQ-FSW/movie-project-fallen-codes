const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`;

export const genresList = async () => {
    const res = await fetch(url);
    const data = res.json();
    return data;
};