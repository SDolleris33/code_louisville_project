function ToggleNav(){
  let nav = document.querySelectorAll('nav > a');
  for (let i = 0; i < nav.length; i++){
    nav[i].classList.toggle('show-nav');
  
  }
}