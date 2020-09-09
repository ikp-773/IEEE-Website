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



$("#flip1").on("click", function() {
  $("#panel1 ").slideToggle();
});

$("#flip2").on("click", function() {
  $("#panel2 ").slideToggle();
});


$("#flip3").on("click", function() {
  $("#panel3 ").slideToggle();
});


// $(".flip").slideToggle(speed,easing,callback)
