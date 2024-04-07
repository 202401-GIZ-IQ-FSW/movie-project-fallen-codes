const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const actorData = async (actorId) => {
    const url = `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}&language=en-US`
    const res = await fetch(url);
    const data = res.json();
    return data;
};

export const actorMoviesData = async (actorId) => {
    const url = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}&language=en-US`
    const res = await fetch(url);
    const data = res.json();
    return data;
};