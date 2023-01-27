let searchBtn = document.getElementById('search-btn')
let searchParams = document.getElementById('text-input')
let movieResultsTable = document.getElementById('movie-results')
let apiKey = '1851b49e'
let apiKey2 = 'Nq178l1PC1zOvSDhLsOWhDI0FwqXPI99'

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