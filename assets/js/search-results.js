// grab user search from local storage
let storedSearch = JSON.parse(localStorage.getItem('movie-search'))

function findMovie(searchVal) {
    let movieUrl = `http://www.omdbapi.com/?&apikey=${apiKey}&s=${searchVal}`
    let giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey2}&q=${searchVal}&limit=25&offset=0&rating=g&lang=en`

    fetch(movieUrl)
    .then(function (res) {
        console.log(res)
        return res.json()
    })

    .then(function (data) {
        console.log(data)
        // clears past search results from table
        movieResultsTable.textContent = ""

        // iterates through data array and adds all titles to search results table
        for (let i = 0; i < data.Search.length; i++) {
            const movieResults = data.Search[i];
            console.log(movieResults)
            // generate new row on table for each search result
            let trEl = document.createElement('tr')
            // generate new data cell for each row on table
            let tdEl = document.createElement('td')
            // add movie title from each search result to table data cell
            tdEl.innerText = movieResults.Title
            // add table data cell to table row
            trEl.appendChild(tdEl)
            // add table row to table
            movieResultsTable.appendChild(trEl)
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

window.addEventListener('load', findMovie(storedSearch))