var path = document.querySelector('svg path'),
length = path.getTotalLength();
console.log(length);

function myFunction() {
  myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("home").style.display = "block";
}