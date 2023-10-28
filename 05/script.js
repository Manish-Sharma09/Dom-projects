/** @format */

var arr = [
  {
    dp: "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
    story:
      "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
  },
  {
    dp: "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
    story:
      "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
  },
  {
    dp: "https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg",
    story:
      "https://cdn.pixabay.com/photo/2014/09/23/08/57/ball-457334_1280.jpg",
  },
  {
    dp: "https://cdn.pixabay.com/photo/2016/12/29/12/27/cyber-glasses-1938449_1280.jpg",
    story:
      "https://cdn.pixabay.com/photo/2016/12/29/12/27/cyber-glasses-1938449_1280.jpg",
  },
  {
    dp: "https://cdn.pixabay.com/photo/2014/07/09/09/19/digital-388075_1280.jpg",
    story:
      "https://cdn.pixabay.com/photo/2017/07/31/11/44/laptop-2557576_1280.jpg",
  },
];

var clutter = "";
var stories = document.querySelector("#stories");
var values = document.querySelector("#full-screen");

arr.forEach(function (elem, idx) {
  clutter += `<div  class="story"> <img id="${idx}" src="${elem.dp}" alt=""></div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
  values.style.display = "block";
  values.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(() => {
    values.style.display = "none";
  }, 3000);
  
});
var closeIcon = document.querySelector("#close-icon");

closeIcon.addEventListener("click", function () {
  values.style.display = "none";
});