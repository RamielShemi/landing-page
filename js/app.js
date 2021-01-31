/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const fregmnts =document.createDocumentFragment();
const myuls = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

sections.forEach( section => {
    const txet = section.getAttribute('data-nav');
    const newli = document.createElement('li');
    const links = document.createElement('a');
    const txetnod = document.createTextNode(txet);
    links.appendChild(txetnod);
    links.addEventListener("click",function(event){
      event.preventDefault();
        section.scrollIntoView({behavior: "smooth"});
    });
    
    newli.appendChild(links);
    newli.className =('menu__link');
    fregmnts.appendChild(newli);
    });
    myuls.appendChild(fregmnts);

//add active and remove unactive

window.addEventListener('scroll',function(){});
window.addEventListener('scroll',function chechsection(){
  sections.forEach((section) => {
      let rectActvSection = section.getBoundingClientRect();
      if (rectActvSection.top >= 0 && rectActvSection.top<=150) {
        section.classList.add('your-active-class','active-section');
      }
      else{
          section.classList.remove('your-active-class','active-section');
        }
  });
});


// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


