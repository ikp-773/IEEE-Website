// var totalReports= document.querySelectorAll('.flip').length;
//
// for (var i = 0; i < totalReports; i++) {
//   document.querySelectorAll(".flip")[i].addEventListener('click', handleClick);
// }
//
// handleClick(){
//   if (this.style.display === "none") {
//    this.style.display = "block";
//  } else {
//    this.style.display = "none";
//  }
// }

$(".flip").on("click",function(){
  $(".pallet .flip").slideToggle();
});

// $(".flip").slideToggle(speed,easing,callback)
