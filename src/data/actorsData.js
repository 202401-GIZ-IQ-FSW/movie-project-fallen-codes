const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const actorsData = async (pageId=1) => {
    const url = `https://api.themoviedb.org/3/trending/person/week?api_key=${API_KEY}&language=en-US&page=${pageId}`
    const res = await fetch(url);
    const data = res.json();
    return data;
};
     