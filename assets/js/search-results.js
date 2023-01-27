// grab user search from local storage
let storedSearch = JSON.parse(localStorage.getItem('movie-search'))

function findMovie(searchVal) {
    let movieUrl = `http://www.omdbapi.com/?&apikey=${apiKey}&s=${searchVal}&y=${searchVal}`
    let giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey2}&q=${searchVal}&limit=25&offset=0&rating=g&lang=en`

    fetch(movieUrl)
    .then(function (res) {
        console.log(res)
        return res.json()
    })

    .then(function (data) {
        console.log(data)
        // clears past search results from container
        movieResultsContainer.textContent = ""

        // iterates through data array and adds all titles to search results table
        for (let i = 0; i < data.Search.length; i++) {
            const movieResults = data.Search[i];
            console.log(movieResults)
            
            let titleEl = document.createElement('h2')
            // add movie title data to title element
            titleEl.innerText = movieResults.Title
            // add movie titles to container
            movieResultsContainer.appendChild(titleEl)
        }

    })

    fetch(giphyUrl)
    .then(function (res) {
        console.log(res)
        return res.json()
    })

    .then(function (data) {
        console.log(data)
        
        
    })
    


}
// findMovie function is invoked on search results page load
window.addEventListener('load', findMovie(storedSearch))