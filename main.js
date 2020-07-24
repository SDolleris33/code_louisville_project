function ToggleNav(){
  let nav = document.querySelectorAll('nav > a');
  for (let i = 0; i < nav.length; i++){
    nav[i].classList.toggle('show-nav');
  
  }
}

const recipes = [
 'rum ,coke', 
 '', 
 '', 
 '', 
 '', 
 '', 
 '', 
 '', 
 '', 
 '', 
 '', 
 '', 
 '', 
 '', 
 '', 
]
  
  function getRecipe(){
  
  let value = parsint(document.getElementById('cocktails').value);
  return value;
  
  }
  
  function showRecipe(index){
    document.getElementById('recipe_out').innerText = recipes[index];
}

showRecipe(getRecipe());
  