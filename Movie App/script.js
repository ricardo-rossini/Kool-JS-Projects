const APIURL = 'https://api.themoviedb.org/3/discover/movie?api_key=8c5e3d4cce9e66b58c25c2bd8b9db469&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    console.log(respData);

    /* respData.results.forEach(movie => {
        const img = document.createElement('img');
        img.src = IMGPATH + movie.poster_path;
        document.body.appendChild(img);
    }); */
    return respData;
}

getMovies();