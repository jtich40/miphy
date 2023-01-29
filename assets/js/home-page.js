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



// CAROUSEL

const $ = selector => {
    return document.querySelector(selector);
  };
  
  function next() {
    if ($(".hide")) {
      $(".hide").remove(); 
    }
  
    /* Step */
  
    if ($(".prev")) {
      $(".prev").classList.add("hide");
      $(".prev").classList.remove("prev");
    }
  
    $(".act").classList.add("prev");
    $(".act").classList.remove("act");
  
    $(".next").classList.add("act");
    $(".next").classList.remove("next");
  
    /* New Next */
  
    $(".new-next").classList.remove("new-next");
  
    const addedEl = document.createElement('li');
  
    $(".list").appendChild(addedEl);
    addedEl.classList.add("next","new-next");
  }
  
  function prev() {
    $(".new-next").remove();
      
    /* Step */
  
    $(".next").classList.add("new-next");
  
    $(".act").classList.add("next");
    $(".act").classList.remove("act");
  
    $(".prev").classList.add("act");
    $(".prev").classList.remove("prev");
  
    /* New Prev */
  
    $(".hide").classList.add("prev");
    $(".hide").classList.remove("hide");
  
    const addedEl = document.createElement('li');
  
    $(".list").insertBefore(addedEl, $(".list").firstChild);
    addedEl.classList.add("hide");
  }
  
  slide = element => {
    /* Next slide */
    
    if (element.classList.contains('next')) {
      next();
      
    /* Previous slide */
      
    } else if (element.classList.contains('prev')) {
      prev();
    }
  }
  
  const slider = $(".list"),
        swipe = new Hammer($(".swipe"));
  
  slider.onclick = event => {
    slide(event.target);
  }
  
  swipe.on("swipeleft", (ev) => {
    next();
  });
  
  swipe.on("swiperight", (ev) => {
    prev();
  });