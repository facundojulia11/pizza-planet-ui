import { customFetch } from "../api/httpService.js";

export function fetchProducts(product, isIndexFile = false) {
  customFetch
    .get(`http://127.0.0.1:5000/${product}`)
    .then((response) => response.json())
    .then((products) => {
      let rows = products.map((element) =>
        isIndexFile
          ? createProductTemplateForOrder(element, product)
          : createProductTemplate(element, product)
      );
      let table = $(`#${product}s tbody`);
      table.append(rows);
    });
}

export function fetchProductById(_id, product) {
  customFetch
    .get(`http://127.0.0.1:5000/${product}/id/${_id}`)
    .then((response) => response.json())
    .then((prod) => {
      $("#_id").val(prod._id);
      $("#name").val(prod.name);
      $("#price").val(prod.price);
    });
}

export function postProducts(product, productData) {
  customFetch
    .post(`http://127.0.0.1:5000/${product}/`, productData)
    .then((res) => res.json())
    .then((res) => showNotification(product));
}

export function putProducts(product, productData) {
  customFetch
    .put(`http://127.0.0.1:5000/${product}/`, productData)
    .then((res) => res.json())
    .then((res) => showNotification(product));
}

function createProductTemplate(product, productTemplate) {
  let template = $(`#${productTemplate}-item-template`)[0].innerHTML;
  return Mustache.render(template, product);
}

function createProductTemplateForOrder(product, productTemplate) {
  let template = $(`#${productTemplate}s-template`)[0].innerHTML;
  return Mustache.render(template, product);
}
/**
 * Shows a notification when the order is accepted
 */

function showNotification(product) {
  let productAlert = $(`#${product}-alert`);
  productAlert.toggle();
  setTimeout(() => productAlert.toggle(), 5000);
}
