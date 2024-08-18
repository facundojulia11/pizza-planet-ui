import { postProducts } from "../product/product.js";

/**
 * Get the form and submit it with fetch API
 */
let sizeForm = $("#size-form");
sizeForm.submit((event) => {
  let size = getSizeData();
  postProducts("size", size);

  event.preventDefault();
  event.currentTarget.reset();
});

/**
 * Gets the order data with JQuery
 */
function getSizeData() {
  return {
    name: $("input[name='name']").val(),
    price: $("input[name='price']").val(),
  };
}
