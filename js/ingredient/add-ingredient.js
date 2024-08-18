import { postProducts } from "../product/product.js";

/**
 * Get the form and submit it with fetch API
 */
let ingredientForm = $("#ingredient-form");
ingredientForm.submit((event) => {
  let ingredient = getIngredientData();
  postProducts("ingredient", ingredient);

  event.preventDefault();
  event.currentTarget.reset();
});

/**
 * Gets the order data with JQuery
 */
function getIngredientData() {
  return {
    name: $("input[name='name']").val(),
    price: $("input[name='price']").val(),
  };
}
