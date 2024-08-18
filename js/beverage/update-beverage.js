import { fetchProductById, putProducts } from "../product/product.js";

function loadInformation() {
  let urlParams = new URLSearchParams(window.location.search);
  let _id = urlParams.get("_id");
  fetchProductById(_id, "beverage");
}

/**
 * Get the form and submit it with fetch API
 */
let beverageForm = $("#beverage-form");
beverageForm.submit((event) => {
  let beverage = getBeverageData();
  putProducts("beverage", beverage);

  event.preventDefault();
  event.currentTarget.reset();
  window.location.href = "/app/beverage/beverages.html";
});

/**
 * Gets the beverage data with JQuery
 */
function getBeverageData() {
  return {
    _id: $("input[id='_id']").val(),
    name: $("input[id='name']").val(),
    price: $("input[id='price']").val(),
  };
}

window.onload = loadInformation;
