document.addEventListener("DOMContentLoaded", function () {
  fetchReportData();
});

function fetchReportData() {
  fetch("http://127.0.0.1:5000/report")
    .then((response) => response.json())
    .then((data) => {
      displayMostRequestedIngredient(data.most_requested_ingredient);
      displayMostRevenueMonth(data.most_revenue_month);
      displayTopCustomers(data.top_three_customers);
    })
    .catch((error) => {
      console.error("Error fetching report data:", error);
    });
}

function displayMostRequestedIngredient(ingredientData) {
  document.getElementById("ingredient-name").textContent =
    ingredientData.ingredient;
  document.getElementById("ingredient-count").textContent =
    ingredientData.count;
}

function displayMostRevenueMonth(revenueData) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("revenue-month").textContent =
    monthNames[revenueData.month - 1];
  document.getElementById("revenue-year").textContent = revenueData.year;
  document.getElementById("revenue-total").textContent =
    revenueData.total.toFixed(2);
}

function displayTopCustomers(customers) {
  const customerList = document.getElementById("customer-list");
  customers.forEach((customer) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${customer.client_name} - ${customer.order_count} orders`;
    customerList.appendChild(listItem);
  });
}
