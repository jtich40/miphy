// grab user search from local storage
let storedSearch = JSON.parse(localStorage.getItem('movie-search'))

function findMovie(searchVal) {
    let apiKey = '1851b49e'
    let movieUrl = `http://www.omdbapi.com/?&apikey=${apiKey}&s=${searchVal}&y=${searchVal}`
    

    fetch(movieUrl)
    .then(function (res) {
        // console.log(res)
        return res.json()
    })

    .then(function (data) {
        // console.log(data)
        // clears past search results from container
        movieResultsContainer.textContent = ""

        // iterates through data array and adds all titles to search results table
        for (let i = 0; i < data.Search.length; i++) {
            const movieResults = data.Search[i];
            // console.log(movieResults)
            
            let titleEl = document.createElement('h2')
            // add movie title data to title element
            titleEl.innerText = movieResults.Title
            // save movie titles to local storage
            localStorage.setItem('movie-title', JSON.stringify(movieResults.Title))
            
            // add movie titles to container
            movieResultsContainer.appendChild(titleEl)
            // grab movie titles from local storage
            let storedTitles = JSON.parse(localStorage.getItem('movie-title'))
            findGif(storedTitles)
        }

    })

    
    
    
}
function findGif(titles) {
    let apiKey2 = 'Nq178l1PC1zOvSDhLsOWhDI0FwqXPI99'
    let giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey2}&q=${titles}&limit=25&offset=0&rating=g&lang=en`

    fetch(giphyUrl)
    .then(function (res) {
        // console.log(res)
        return res.json()
    })

    .then(function (data) {
        console.log(data)
        for (let i = 0; i < 5; i++) {
            const gifResults = data.data[i];
            
            let gifEl = document.createElement('img')
            // add gif link to the gif element
            gifEl.src = gifResults.images.original.url
            // add gif to container
            movieResultsContainer.appendChild(gifEl)
            
        }
        
    })
}
// findMovie function is invoked on search results page load
window.addEventListener('load', findMovie(storedSearch))