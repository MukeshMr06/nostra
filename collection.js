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

//search functionality
var imagecontainer = document.getElementById("image-container")
var search = document.getElementById("search")
var imagelist = imagecontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var entervalue = event.target.value.toUpperCase()

    for (count = 0; count < imagelist.length; count = count + 1) {
        var imagename = imagelist[count].querySelector("h1").textContent
       
        if (imagename.toUpperCase().indexOf(entervalue) < 0) {
            imagelist[count].style.display = "none"
        }
        else {
            imagelist[count].style.display = "block"
        }
    }
})


// Check box
var check = document.getElementsByName("check")
var result = document.getElementById('result')
dress = []
check[0].addEventListener("click",function(){
    if(check[0].checked){
        console.log("checked")
        dress.push(event.target.value)
        result.textContent = dress
    }
    else{
        console.log("unchecked")
        var index = dress.indexOf(event.target.value)
        dress.splice(index,1)
        result.textContent=dress
    }
})