import { postProducts } from "../product/product.js";

/**
 * Get the form and submit it with fetch API
 */
let beverageForm = $("#beverage-form");
beverageForm.submit((event) => {
  let beverage = getBeverageData();
  postProducts("beverage", beverage);

  event.preventDefault();
  event.currentTarget.reset();
});

/**
 * Gets the order data with JQuery
 */
function getBeverageData() {
  return {
    name: $("input[name='name']").val(),
    price: $("input[name='price']").val(),
  };
}
