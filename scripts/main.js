let list;
let item;
let itemWidth;

window.addEventListener('load', function () {
  carrus = document.getElementById("carrusel");

  // Usamos la anchura del primer elemento para saber cuanto hemos de desplazarlos.
  carrItems = document.getElementsByClassName("carrItem");
  itemWidth = carrItems[0].offsetWidth;
});


function handleClick(direction) {
  // Based on the direction we call `scrollBy` with the item width we got earlier
  if(direction === "previous") {
    carrus.scrollBy({ left: -itemWidth, behavior: "smooth" });
  } else {
    carrus.scrollBy({ left: itemWidth, behavior: "smooth" });
  }
}