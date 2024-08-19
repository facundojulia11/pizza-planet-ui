/**
 * POST the order on /pizza
 * @param order
 */

import { fetchProducts } from "./product/product.js";

function postOrder(order) {
  fetch("http://127.0.0.1:5000/order/", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((res) => showNotification());
}

/**
 * Get the form and submit it with fetch API
 */
let orderForm = $("#order-form");
orderForm.submit((event) => {
  let order = getOrderData();
  postOrder(order);

  event.preventDefault();
  event.currentTarget.reset();
});

/**
 * Gets the order data with JQuery
 */
function getOrderData() {
  let ingredients = [];
  let beverages = [];
  $.each($("input[name='ingredients']:checked"), function (el) {
    ingredients.push($(this).val());
  });

  $.each($("input[name='beverages']:checked"), function (el) {
    beverages.push($(this).val());
  });

  return {
    client_name: $("input[name='name']").val(),
    client_dni: $("input[name='dni']").val(),
    client_address: $("input[name='address']").val(),
    client_phone: $("input[name='phone']").val(),
    size_id: $("input[name='size']:checked").val(),
    ingredients,
    beverages,
  };
}

/**
 * Shows a notification when the order is accepted
 */
function showNotification() {
  let orderAlert = $("#order-alert");
  orderAlert.toggle();
  setTimeout(() => orderAlert.toggle(), 5000);
}

function loadInformation() {
  fetchProducts("beverage", true);
  fetchProducts("ingredient", true);
  fetchProducts("size", true);
}

window.onload = loadInformation;
