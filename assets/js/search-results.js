// global DOM variable
let movieResultsContainer = document.getElementById('search-results')

// grab user search from local storage to pass through as argument for findMovie function
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
        // clears past search results from container
        movieResultsContainer.textContent = ""

        // iterates through data array and adds all titles to search results container
        for (let i = 0; i < data.Search.length; i++) {
            const movieResults = data.Search[i];
            // call findGif function within first loop to render 5 GIFs/title
            findGif(movieResults.Title)
        }

    })

    
}
function findGif(title) {
    let apiKey2 = 'Nq178l1PC1zOvSDhLsOWhDI0FwqXPI99'
    let giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey2}&q=${title}&limit=3&offset=0&rating=g&lang=en`

    fetch(giphyUrl)
    .then(function (res) {
        return res.json()
    })

    .then(function (data) {
        console.log(data)
        // build titles here in nested loop to render 5 GIFs/title
        let titleEl = document.createElement('h2')
            // add movie title data to title element
            titleEl.innerText = title
            // add movie titles to container
            movieResultsContainer.appendChild(titleEl)
        for (let i = 0; i < data.data.length; i++) {
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
window.addEventListener('load', function() {
    findMovie(storedSearch)
})