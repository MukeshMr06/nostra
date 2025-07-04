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
// var imagecontainer = document.getElementById("image-container")
// var search = document.getElementById("search")
// var imagelist = imagecontainer.querySelectorAll("div")

// search.addEventListener("keyup", function () {
//     var entervalue = event.target.value.toUpperCase()

//     for (count = 0; count < imagelist.length; count = count + 1) {
//         var imagename = imagelist[count].querySelector("h1").textContent

//         if (imagename.toUpperCase().indexOf(entervalue) < 0) {
//             imagelist[count].style.display = "none"
//         }
//         else {
//             imagelist[count].style.display = "block"
//         }
//     }
// })


// Check box
// Sample dress data
const dresses = [
    {
        name: "Summer shirt",
        category: "summer",
        color: "yellow",
        price: "₹850",
        arrivals: "new",
        image: "f1.jpg",
    },
    {
        name: "Beach shirt",
        category: "beach",
        color: "green",
        price: "₹645",
        arrivals: "old",
        image: "f2.jpg",
    },
    {
        name: "Party shirt",
        category: "party",
        color: "green",
        price: "₹800",
        arrivals: "new",
        image: "f3.jpg",
    },
    {
        name: "Summer shirt",
        category: "summer",
        color: "white",
        price: "₹750",
        arrivals: "new",
        image: "f4.jpg",
    },
    {
        name: "Beach shirt",
        category: "beach",
        color: "red",
        price: "₹900",
        arrivals: "new",
        image: "f5.jpg",
    },
    {
        name: "party shirt",
        category: "party",
        color: "red",
        price: "₹799",
        arrivals: "new",
        image: "f6.jpg",
    },
    {
        name: "Beach shirt",
        category: "beach",
        color: "green",
        price: "₹690",
        arrivals: "old",
        image: "f8.jpg",
    },
    {
        name: "beach shirt",
        category: "beach",
        color: "white",
        price: "₹749",
        arrivals: "new",
        image: "n1.jpg",
    },
    {
        name: "party shirt",
        category: "party",
        color: "green",
        price: "₹849",
        arrivals: "old",
        image: "n2.jpg",
    },
    {
        name: "party shirt",
        category: "party",
        color: "green",
        price: "₹650",
        arrivals: "old",
        image: "n3.jpg",
    },
    {
        name: "Beach shirt",
        category: "beach",
        color: "green",
        price: "₹700",
        arrivals: "new",
        image: "n4.jpg",
    },
    {
        name: "party shirt",
        category: "party",
        color: "white",
        price: "₹650",
        arrivals: "old",
        image: "n5.jpg",
    },
    {
        name: "party shirt",
        category: "party",
        color: "yellow",
        price: "₹449",
        arrivals: "new",
        image: "n7.jpg",
    },
    {
        name: "summer shirt",
        category: "summer",
        color: "green",
        price: "₹580",
        arrivals: "new",
        image: "n8.jpg",
    },

];


function filterDresses() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();


  const summerCheckbox = document.getElementById("summerCheckbox").checked;
  const beachCheckbox = document.getElementById("beachCheckbox").checked;
  const partyCheckbox = document.getElementById("partyCheckbox").checked;


  const redCheckbox = document.getElementById("redCheckbox").checked;
  const yellowCheckbox = document.getElementById("yellowCheckbox").checked;
  const greenCheckbox = document.getElementById("greenCheckbox").checked;
  const whiteCheckbox = document.getElementById("whiteCheckbox").checked;

  const newCheckbox = document.getElementById("newCheckbox").checked;
  const oldCheckbox = document.getElementById("oldCheckbox").checked;

  const dressContainer = document.getElementById("dressContainer");

  // Clear previous dress items
  dressContainer.innerHTML = "";

  
  dresses.forEach((dress) => {
    const categoryMatch =
      (summerCheckbox && dress.category === "summer") ||
      (beachCheckbox && dress.category === "beach") ||
      (partyCheckbox && dress.category === "party");

    const colorMatch =
      (redCheckbox && dress.color === "red") ||
      (yellowCheckbox && dress.color === "yellow") ||
      (greenCheckbox && dress.color === "green") ||
      (whiteCheckbox && dress.color === "white");

    const arrivalsMatch =
      (newCheckbox && dress.arrivals === "new") ||
      (oldCheckbox && dress.arrivals === "old");

    if (
      dress.name.toLowerCase().includes(searchInput) &&
      (categoryMatch ||
        (!summerCheckbox && !beachCheckbox && !partyCheckbox)) &&
      (colorMatch ||
        (!redCheckbox &&
          !yellowCheckbox &&
          !greenCheckbox &&
          !whiteCheckbox)) &&
      (arrivalsMatch || (!newCheckbox && !oldCheckbox))
    ) {
      const dressItem = document.createElement("div");
      dressItem.className = "bg-white  p-1 m-2";

      
      dressItem.innerHTML = `
                <img src="${dress.image}" alt="${dress.name}" class="mb-2 w-50 rounded-md">
                <h3 class="text-lg font-semibold">${dress.name}</h3>
                <p class="text-green-600">${dress.price}</p>
            `;
      dressContainer.appendChild(dressItem);
    }
  });
}

filterDresses();

