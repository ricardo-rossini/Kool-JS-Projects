const APIURL = 'https://api.themoviedb.org/3/discover/movie?api_key=8c5e3d4cce9e66b58c25c2bd8b9db469&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    const main = document.querySelector('main');

    console.log(respData);

    respData.results.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        
        movieEl.innerHTML = `
        <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        `;

        main.appendChild(movieEl);
    });
    return respData;
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green';
    }
    else if(vote >= 5) {
        return 'orange';
    }
    else{
        return 'red';
    }
}

getMovies();
