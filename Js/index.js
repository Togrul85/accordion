let accor = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accor.length; i++) {
    accor[i].addEventListener("click", function() {
    this.classList.toggle("accor");
    var information = this.nextElementSibling;

    if (information.style.display === "block") {
        information.style.display = "none";
    }
    
    else {
        information.style.display = "block";
    }
  });
}