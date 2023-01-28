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


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }



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