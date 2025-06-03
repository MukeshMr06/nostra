var navebar = document.getElementById("navebar")
var closenav = document.getElementById("close")

closenav.addEventListener("click", function () {
    navebar.style.marginTop = "-35px"
})

// header section

var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")
var closenav = document.getElementById("closenav")

menu.addEventListener("click", function () {
    sidenav.style.left = 0
})
closenav.addEventListener("click", function () {
    sidenav.style.left = "-40%"
})
