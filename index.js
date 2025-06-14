var navebar = document.getElementById("navebar")
var closenav = document.getElementById("close")

closenav.addEventListener("click", function () {
    navebar.style.marginTop = "-35px"
})

//selecting heart
// var one = document.querySelector(".heart")
//  one.addEventListener("click", function () {
//     one.style.color = "red"
// })


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

//slider

var currentslide = 1
var totalslide = document.getElementById("slider").childElementCount

//interval

function prev() {
    if (currentslide > 1) {
        currentslide--
    }
    else {
        currentslide = totalslide
    }
    showslide()
}

function next() {
    if (currentslide < totalslide) {
        currentslide++
    }
    else {
        currentslide = 1
    }
    showslide()
}

function showslide() {
    var slides = document.getElementById("slider").getElementsByTagName("li")

    for (var i = 0; i < totalslide; i++) {
        if (currentslide == i + 1) {
            slides[i].classList.remove("hidden")
        }
        else {
            slides[i].classList.add("hidden")
        }
    }
}

function starscroll() {
    interval = setInterval(() => {
        next()
    }, 2500)
}

function stopscroll() {
    clearInterval(interval)
}

window.onload = () => {
    starscroll()
}