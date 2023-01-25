let searchBtn = document.getElementById('search-btn')
let searchParams = document.getElementById('text-input')
let apiKey = '1851b49e'
let apiKey2 = 'Nq178l1PC1zOvSDhLsOWhDI0FwqXPI99'

searchBtn.addEventListener('click', function () {
    let searchVal = searchParams.value
    if(searchVal === "") {
        return
    }
    findMovie(searchVal)
})

function findMovie (searchVal) {
    let movieUrl = `http://www.omdbapi.com/?&apikey=${apiKey}&s=${searchVal}`
    let giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey2}&q=${searchVal}&limit=25&offset=0&rating=g&lang=en`

    fetch(movieUrl)
    .then(function (res) {
        console.log(res)
        return res.json()
    })

    .then(function (data) {
        console.log(data)

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




