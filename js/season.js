const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("Season");

fetch(
  "https://docs.google.com/spreadsheets/d/15X-4AAr4jqaJo8GYBYzvzGytupqC8MqWBOGDGgpHmtw/edit#gid=371921998" +
    season
)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#ingrediens").content;
  const copy = template.cloneNode(true);
  const parent = document.querySelector(".container");
  parent.appendChild(copy);

  copy.querySelector(
    "img"
  ).src = `http://mathildelindberg.dk/webP/brombaer/${product.id}.webp`;
}
