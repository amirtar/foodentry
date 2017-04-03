var totalIngredients = 0;
var oneIngredientNode;
window.onload = function() {
    var files = document.querySelectorAll("input[type=file]");
    oneIngredientNode = document.getElementById('ingredient0');
/*    oneIngredientNode.getElementsByTagName("select")[0].disabled= true;
    oneIngredientNode.getElementsByTagName("input")[0].disabled= true;
    oneIngredientNode.getElementsByTagName("input")[1].disabled= true;*/
    oneIngredientNode = oneIngredientNode.cloneNode(true);
    files[0].addEventListener("change", function(e) {
        if(this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) { document.getElementById("preview").setAttribute("src", e.target.result); }
            reader.readAsDataURL(this.files[0]);
        }
    });
}
function addIngredient(ev){
  if (ev.value == ""){
    var thisRow = ev.parentNode.parentNode;
    var tableBody = thisRow.parentNode;
    tableBody.removeChild(thisRow);
    return;
  }
  var ingredients = document.getElementById('ingredients');
  totalIngredients++;
  var newIngredientRow = oneIngredientNode.cloneNode(true);
  newIngredientRow.setAttribute("id","ingredient"+ totalIngredients);
  ingredients.appendChild(newIngredientRow);
  newIngredientId="ingredient" + totalIngredients;
  var newIngredientNode = document.getElementById(newIngredientId);
  newIngredientNode.getElementsByTagName("select")[0].name= "unit" + totalIngredients;
  newIngredientNode.getElementsByTagName("input")[0].name= "ingredient"  + totalIngredients;
  newIngredientNode.getElementsByTagName("input")[1].name= "amount"+ totalIngredients;


}

function cleanBeforeSubmit(){
  var lastRow = document.getElementById("ingredient"+ totalIngredients);
  var tableBody = lastRow.parentNode;
  tableBody.removeChild(lastRow);
  return true;
}
