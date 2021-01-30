
const input = document.getElementById('input');
const button = document.getElementById('btn-search');

// button.addEventListener('click', () => {
//     console.log('got me');
// })


// input.addEventListener('click', () => {
//     console.log('got me');
// })

var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US";


const getData = async () => {
    return await fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
       showGenre(data);
    })
}

const showGenre = (genres) => {
    genres.genres.forEach((genre) => {
        // console.log(genre.id,genre.name);
        console.log(`${genre.id} --> genre id , ${genre.name}-->genre name`)
        
    });
}

button.addEventListener('click', getData);