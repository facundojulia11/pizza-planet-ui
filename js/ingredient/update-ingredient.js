import { fetchProductById, putProducts } from "../product/product.js";

function loadInformation() {
  let urlParams = new URLSearchParams(window.location.search);
  let _id = urlParams.get("_id");
  fetchProductById(_id, "ingredient");
}

/**
 * Get the form and submit it with fetch API
 */
let ingredientForm = $("#ingredient-form");
ingredientForm.submit((event) => {
  let ingredient = getIngredientData();
  putProducts("ingredient", ingredient);

  event.preventDefault();
  event.currentTarget.reset();
  window.location.href = "/app/ingredient/ingredients.html";
});

/**
 * Gets the ingredient data with JQuery
 */
function getIngredientData() {
  return {
    _id: $("input[id='_id']").val(),
    name: $("input[id='name']").val(),
    price: $("input[id='price']").val(),
  };
}

window.onload = loadInformation;
