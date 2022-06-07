// carousel > workContentImg
$(document).ready(function () {
    let workContentImgContent = $(".workContentImgContent");
    workContentImgContent.carouselTicker({
      speed: 4,
      delay: 50,
      reverse: true,
    });
  });