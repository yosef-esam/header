document.getElementById("search-icon").addEventListener("click", function () {
  document
    .getElementById("search-section")
    .classList.toggle("translate-x-full");
  document.getElementById("search-section").classList.toggle("translate-x-0");
});

document.getElementById("close-search").addEventListener("click", function () {
  document
    .getElementById("search-section")
    .classList.toggle("translate-x-full");
  document.getElementById("search-section").classList.toggle("translate-x-0");
});

document.getElementById("cart-icon").addEventListener("click", function () {
  document.getElementById("cart-section").classList.toggle("translate-x-full");
  document.getElementById("cart-section").classList.toggle("translate-x-0");
});

document.getElementById("close-card").addEventListener("click", function () {
  document.getElementById("cart-section").classList.toggle("translate-x-full");
  document.getElementById("cart-section").classList.toggle("translate-x-0");
});
