/*
 * Shared image-slideshow controller for portfolio modals and the standalone
 * project detail page. Operates on any .mySlides/.dot elements present in
 * the page at the time it runs (after portfolio.js has rendered them).
 */
(function ($) {
  "use strict";

  var slideIndex = 1;

  function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (slides.length === 0) {
      return;
    }
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (var j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  window.plusSlides = function (n) {
    showSlides((slideIndex += n));
  };

  window.currentSlide = function (n) {
    showSlides((slideIndex = n));
  };

  // Wait for document ready so any portfolio.js-rendered slides already exist.
  $(document).ready(function () {
    showSlides(slideIndex);
  });
})(jQuery);
