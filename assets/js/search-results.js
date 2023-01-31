// global DOM variable
let movieResultsContainer = document.getElementById('search-results')
let searchBtn = document.getElementById('search-btn')
let searchParams = document.getElementById('text-input')

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
            // add wrapper that contains GIFs for styling
            let wrapper = document.createElement('div')
            wrapper.setAttribute('class', 'wrapper')
            // // add gif element to page
            let gifEl = document.createElement('img')
            gifEl.setAttribute('class', 'gif')
            gifEl.src = gifResults.images.original.url
            wrapper.appendChild(gifEl)
            // add gif to container
            movieResultsContainer.appendChild(wrapper)
        }
    })
}

function generateQuote () {
  // container for randomly generated movie quote
  let quoteContainer = document.getElementById('quotes')
  // pick random quote/character/movie data
  let randomQuote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)]
 
  // generate quote for container
  let quoteEl = document.createElement('span')
  quoteEl.setAttribute('class', 'quote')
  quoteEl.innerHTML = `"${randomQuote.quote}"`
  quoteContainer.appendChild(quoteEl)

  // generate character for container
  let characterEl = document.createElement('span')
  characterEl.setAttribute('class', 'character')
  characterEl.innerHTML = ` - ${randomQuote.character}, `
  quoteContainer.appendChild(characterEl)

  // generate movie for container
  let movieEl = document.createElement('span')
  movieEl.setAttribute('class', 'movie')
  movieEl.innerHTML = `${randomQuote.movie}`
  quoteContainer.appendChild(movieEl)
}

// findMovie function is invoked on search results page load
window.addEventListener('load', function() {
    findMovie(storedSearch)
    generateQuote()
})

searchBtn.addEventListener('click', function () {
    // text input entered by user
    let searchVal = searchParams.value
    if(searchVal === "") {
        return
    }
    // saves search value to local storage
    localStorage.setItem('movie-search', JSON.stringify(searchVal))
   
    // redirects user to search results page
    window.location.href = './search-results.html'
})