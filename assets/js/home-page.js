// global DOM variables
let searchBtn = document.getElementById('search-btn')
let searchParams = document.getElementById('text-input')

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

function generateQuote () {
  // container for randomly generated movie quote
  let quoteContainer = document.getElementById('quotes')
  // pick random quote/character/movie data
  let randomQuote = movieQuotes[Math.floor(Math.random() * movieQuotes.length)]
  // console.log(randomQuote)
 
  // generate quote for container
  let quoteEl = document.createElement('span')
  quoteEl.setAttribute('class', 'quote')
  quoteEl.innerHTML = `"${randomQuote.quote}"`
  quoteContainer.appendChild(quoteEl)
  // console.log(quoteEl)

  // generate character for container
  let characterEl = document.createElement('span')
  characterEl.setAttribute('class', 'character')
  characterEl.innerHTML = ` - ${randomQuote.character}, `
  quoteContainer.appendChild(characterEl)
  // console.log(characterEl)

  // generate movie for container
  let movieEl = document.createElement('span')
  movieEl.setAttribute('class', 'movie')
  movieEl.innerHTML = `${randomQuote.movie}`
  quoteContainer.appendChild(movieEl)
  // console.log(movieEl)
}

window.onload = function () {
  generateQuote()
}
