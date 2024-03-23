const API_KEY = "87227e85299796fb4f134e6af5a95925" ;
const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const moviesNowPlaying = async () => {
    const res = await fetch(urlNowPlaying);
    return res.json();
};

// const res = fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
