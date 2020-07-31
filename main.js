//navagation

function ToggleNav(){
  let nav = document.querySelectorAll('nav > a');
  for (let i = 0; i < nav.length; i++){
    nav[i].classList.toggle('show-nav');
 }
}

//recipe array
const recipes = [
 '1 oz Gin ,1/2 oz Lemon juice, 2 Dashes Simple syrup, 2 oz Champagne', 
 '1 oz Campari, 1 oz Gin, 1 oz Red Vermouth', 
 '2 oz Cognac 3/4 oz Lemon juice, 3/4 oz Triple sec', 
 '1/2 oz Dry vermouth,3 oz Gin', 
 '2 oz parts Gin, 1/2 oz sweetened Lime Juice', 
 '1 1/2 oz whiskey", 1 Sugar cube, 2 dashes Angostura bitters,Few dashes plain water', 
 '1 1/2 oz Bourbon whiskey,1 dash egg white,1 oz lemon juice,1/2 oz Gomme syrup', 
 '2 oz whisky,3/4 oz Sweet red vermouth,Dash Angostura bitters,Maraschino cherry', 
 '1 tsp Powdered sugar,2 oz Bourbon,2 tsp Water,4 Mint leaves', 
 '1 1/2 oz Rye whiskey or Cognac,1/4 oz Absinthe, One sugar cube,Three dashes Peychauds Bitters', 
];

//index recipe by value
  
  function getRecipe(){
  
  let value = parseInt(document.getElementById('cocktails').value);
  return value;
  
  }
  
//  display recipe within .recipe_box 
  function showRecipe(index){
    document.getElementById('recipe_out').innerText = recipes[index];
}

showRecipe(getRecipe());


//carousel

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button_right');
const prevButton = document.querySelector('.carousel_button_left');
const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);


/// Slides side by side

const setSlidePosition = (slide, index) => {
 slide.style.left = slideWidth * index + 'px';
}

//Set slides side by side

slides.forEach(setSlidePosition);

const moveSlide = (track, currentSlide, targetSlide) =>{
  track.style.transform ='translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');  
  targetSlide.classList.add('current-slide'); 
}

/// When I click left move slides left
prevButton.addEventListener('click', e =>{
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling; 
  
  moveSlide( track, currentSlide, prevSlide);
});


/// When I click right move slides right

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling; 
  
   moveSlide( track, currentSlide, nextSlide);
})                                      



