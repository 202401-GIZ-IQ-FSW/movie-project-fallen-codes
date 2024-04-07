const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const movieData = async (movieId, endpoint="") => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}${endpoint}?api_key=${API_KEY}&language=en-US`;
    const res = await fetch(url);
    const data = res.json();
    return data;
};

