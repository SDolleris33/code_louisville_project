function ToggleNav(){
  let nav = document.querySelectorAll('nav > a');
  for (let i = 0; i < nav.length; i++){
    nav[i].classList.toggle('show-nav');
 }
}

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
  
  function getRecipe(){
  
  let value = parseInt(document.getElementById('cocktails').value);
  return value;
  
  }
  
  function showRecipe(index){
    document.getElementById('recipe_out').innerText = recipes[index];
}

showRecipe(getRecipe());
