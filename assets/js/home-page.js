// global DOM variables
let input = document.getElementById('text-input')
let searchBtn = document.getElementById('search-btn')
let searchParams = document.getElementById('text-input')


function runSearch() {
  // text input entered by user
  let searchVal = searchParams.value
  if(searchVal === "") {
    return
  }
  // saves search value to local storage
  localStorage.setItem('movie-search', JSON.stringify(searchVal))
  
  // redirects user to search results page
  window.location.href = './search-results.html'
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

// generate new quote on page load
window.onload = function () {
  generateQuote()
}

// event listener to submit search query on click or enter
searchBtn.addEventListener('click', runSearch)

input.addEventListener('keydown', function(event) {
  if(event.key === "Enter") {
    runSearch()
  }
})