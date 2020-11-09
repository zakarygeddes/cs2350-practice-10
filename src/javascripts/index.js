// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//TODO
import { movies } from './movies'

let featured_movie = document.querySelector('.featured')
for(let m of movies){
    let movie_thumb = document.getElementById('m' + m.id)
    movie_thumb.innerHTML = `
        <img src="${m.poster}">
    `

    movie_thumb.onclick = function(){
        selectMovie(m)
    }
}

function selectMovie(m){
    featured_movie.innerHTML = `
    <img src="${m.poster}" style="float: left;">
    <h1>${m.title}</h1>
    <p>${m.plot}</p>
    `
}

function searchMovies(event){
    if(event){
        event.preventDefault()
    }

    let input = document.querySelector('[type="search"]').value || ""
    for(let m of movies){
        let movie_thumb = document.getElementById('m' + m.id)
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            // movie_thumb.classList.add('hidden')
            movie_thumb.style.display = 'none'
        } else {
            // movie_thumb.classList.remove('hidden')
            movie_thumb.style.display = 'block'
        }
    }

}

document.querySelector('button').onclick = searchMovies
document.querySelector('[type="search"]').onsearch = searchMovies
document.forms[0].addEventListener('submit', searchMovies, false)
