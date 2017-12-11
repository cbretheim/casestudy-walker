var slideIndex = 1;
showslides(slideIndex);

// Next/previous controls
function plusslides(n) {
  showslides(slideIndex += n);
}

// Thumbnail image controls
function currentslide(n) {
  showslides(slideIndex = n);
}

function showslides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
