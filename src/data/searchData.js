const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const searchData = async (pageId=1, searchQuery="", searchType) => {
    const listType = searchType.toLowerCase() === "movies" ? "movie" : "person";
    const url = `https://api.themoviedb.org/3/search/${listType}?query=${searchQuery}&api_key=${apiKey}&include_adult=false&language=en-US&page=${pageId}`;
    const res = await fetch(url);
    const data = res.json();
    return data;
};