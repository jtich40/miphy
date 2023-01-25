let searchBtn = document.getElementById('search-btn')
let searchParams = document.getElementById('text-input')
let apiKey = '1851b49e'
let apiKey2 = 'Nq178l1PC1zOvSDhLsOWhDI0FwqXPI99'

function findMovie () {
    let movieUrl = `http://www.omdbapi.com/?&apikey=${apiKey}&s=${searchParams}`
    var giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey2}Nq178l1PC1zOvSDhLsOWhDI0FwqXPI99&q=${searchParams}&limit=25&offset=0&rating=g&lang=en`
}


