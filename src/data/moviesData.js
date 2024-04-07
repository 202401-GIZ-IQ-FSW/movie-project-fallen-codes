const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const moviesData = async (pageId=1, urlCategory="now_playing") => {
    const url = `https://api.themoviedb.org/3/movie/${urlCategory}?api_key=${apiKey}&language=en-US&page=${pageId}`;
    const res = await fetch(url);
    const data = res.json();
    return data;
};




