//= require_tree .

var easteregg = document.getElementById('easteregg');
var smile = document.querySelector("#easteregg img");

easteregg.addEventListener("mouseenter", function(e) {
  smile.setAttribute('src', 'images/smile2.jpg');
});

easteregg.addEventListener("mouseleave", function(e) {
  smile.setAttribute('src', 'images/smile.jpg');
});
