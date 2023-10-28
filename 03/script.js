var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");
var links = document.querySelectorAll("a");

main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

links.forEach(function(link) {
  link.addEventListener("mouseover", function() {
    crsr.style.width = "50px";
    crsr.style.height = "50px";
  });

  link.addEventListener("mouseout", function() {
    crsr.style.width = "20px"; 
    crsr.style.height = "20px";
  });
});
