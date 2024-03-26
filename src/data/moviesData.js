const API_KEY = "87227e85299796fb4f134e6af5a95925" ;
const baseUrl = "https://api.themoviedb.org/3/movie/"
const apiKey = `?api_key=${API_KEY}&language=en-US&page=`; 

// export const moviesData = async (pageId=1, urlCategory="now_playing") => {
//     const url = baseUrl + urlCategory + apiKey + pageId.toString();
//     const res = await fetch(url);
//     const data = res.json();
//     return data;
// };
export const moviesData = async (urlCategory="now_playing", pageId=1) => {
    const initialUrl = baseUrl + urlCategory + apiKey + pageId.toString();
    const initialRes = await fetch(initialUrl);
    const initialData = await initialRes.json();
    const totalPages = initialData.total_pages;

    let allMovies = [];

    // Fetch all pages of movies
    for (let page = 1; page <= totalPages; page++) {
        const url = baseUrl + urlCategory + apiKey + page.toString();
        const res = await fetch(url);
        const data = await res.json();
        allMovies.push(...data.results);
    }

return { total_pages: totalPages, results: allMovies };
};