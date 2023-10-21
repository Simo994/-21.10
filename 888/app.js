// 20f4ae07-a5eb-4293-9bf7-ec5ae637f4f9

const API_KEY = "20f4ae07-a5eb-4293-9bf7-ec5ae637f4f9"
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1"

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': API_KEY,
        },
    })
    const respData = await resp.json()
    console.log(respData)
    showMovies(respData)
}

getMovies(API_URL_POPULAR)

function getClassByRate(vote){
    if (vote >= 7) {
        return "green"
    } else if(vote > 5) {
        return "orange"
    }   else {
        return "red"
    }

}

function showMovies(data) {
    const moviesEl = document.querySelector(".movies")
    data.items.forEach(movie => {
        const movieEl = document.createElement('div')
        movieEl.classList.add("movie")
        movieEl.innerHTML = `
            <div class ="movie__cover">
            <img src="${movie.posterUrl}" alt="${movie.nameRu}">
            </div>
                <div class="movie_info">
                    <div class="movie__title">${movie.nameRu}</div>
                    <div class="movie__category">${movie.genres.map((elem) => ` ${elem.genre}`)}</div>
                    <div class="movie__average movie__average--${getClassByRate(movie.ratingImdb)}">
                    ${movie.ratingImdb}</div>
            </div>
       `
            moviesEl.appendChild(movieEl)
       });
        
}