// adding custom progress bar length

const progressBar = document.querySelectorAll(".progress-bar");

progressBar.forEach(function (bar){
   const progress = bar.getAttribute("data-progress");
   bar.style.width = progress + "%";
});