const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`;

export const genresList = fetch(url).then(res => res.json());