// var carouselWidth = $('.carousel-inner1')[0].scrollWidth;

// var cardWidth = $('.carousel-item1').width();



//  var scrollPosition = 0;

// $('.carousel-control-next').on('click', function(){

// if(scrollPosition < (carouselWidth - (cardWidth * 4))) {

// console.log('next');

// scrollPosition = scrollPosition + cardWidth;

// $('.carousel-inner1').animate({scrollLeft: scrollPosition),600);

// }

// });

// $('.carousel-control-prev').on('click', function() {

// if(scrollPosition > 0) {

// console.log('prev');

// scrollPosition = scrollPosition cardWidth;

// $('.carousel-inner').animate({scrollLeft: scrollPosition),680);
// }

// });

// about section

// Owlcarousel





















//  Product carousel card 1
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:false,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: false,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });

// men product carousel





// contact us page 

function validateEmail(emailId)
{
var mailformat = /([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(emailId.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("Invalid email address.");
document.form1.text1.focus();
return false;
}
}    

  