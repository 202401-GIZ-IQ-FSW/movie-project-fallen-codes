
const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzIyN2U4NTI5OTc5NmZiNGYxMzRlNmFmNWE5NTkyNSIsInN1YiI6IjY1ZmMyYWY0MDQ3MzNmMDE3ZGU4NTY0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t60ny7-SYKHeo_ewi-T1foh8CeBTUkGpGrpqCCK8Rhg'
  }
};

export const genresList = async () => {
    const res = await fetch(url, options);
    return res.json();
};

// const res = fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
