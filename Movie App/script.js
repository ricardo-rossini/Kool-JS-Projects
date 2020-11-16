const APIURL = 'https://api.themoviedb.org/3/discover/movie?api_key=8c5e3d4cce9e66b58c25c2bd8b9db469&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=8c5e3d4cce9e66b58c25c2bd8b9db469&query=';
const main = document.querySelector('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

//getting fav movies
getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();   
    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    //clear main
    main.innerHTML = '';
    //getting movies
    movies.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        
        movieEl.innerHTML = `
            <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
                <h4>Overview: </h4>
                ${movie.overview}
            </div>
        `;

        main.appendChild(movieEl);
    });
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

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    
    if(searchTerm) {
        getMovies(SEARCHAPI + searchTerm);
        search.value = '';
    }
});
