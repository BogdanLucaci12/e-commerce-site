// Scripturile pentru navbar
let hoverinfo = document.querySelector(".ajutor");
let dropdownmenuinfo = document.querySelector(".dropdownmenu-info");

hoverinfo.addEventListener("mouseover", () => {
    dropdownmenuinfo.style.display = "block";
    dropdownmenuinfo.addEventListener("mouseover", () => {
        dropdownmenuinfo.style.display = "block"
    })
})
dropdownmenuinfo.addEventListener("mouseout", () => {
    dropdownmenuinfo.style.display = "none";
})
hoverinfo.addEventListener("mouseout", () => {
    dropdownmenuinfo.style.display = "none"
})

let hoveraccount = document.querySelector(".account")
let dropdownmenuaccount = document.querySelector(".dropdownmenu-myaccount")
hoveraccount.addEventListener("mouseover", () => {
    dropdownmenuaccount.style.display = "block"
    dropdownmenuaccount.addEventListener("mouseover", () => {
        dropdownmenuaccount.style.display = "block"
    })
})
dropdownmenuaccount.addEventListener("mouseout", () => {
    dropdownmenuaccount.style.display = "none"
})
hoveraccount.addEventListener("mouseout", () => {
    dropdownmenuaccount.style.display = "none"
})

let dropdownmenucart = document.querySelector(".dropdownmenu-cart")
let hovercart = document.querySelector(".cart")
hovercart.addEventListener("click", () => {
    window.location.href = "cart.html"
})
hovercart.addEventListener("mouseover", () => {
    dropdownmenucart.style.display = "flex"
    dropdownmenucart.addEventListener("mouseover", () => {
        dropdownmenucart.style.display = "flex"
    })

})
hovercart.addEventListener("mouseout", () => {
    dropdownmenucart.style.display = "none";
})

dropdownmenucart.addEventListener("mouseout", () => {
    dropdownmenucart.style.display = "none"
})
let favorites = document.querySelector(".favorites");
favorites.addEventListener("mouseover", () => {
    const inDevelopment = document.querySelector(".in-development");
    inDevelopment.style.display = "block"
})
favorites.addEventListener("mouseout", () => {
    const inDevelopment = document.querySelector(".in-development");
    inDevelopment.style.display = "none"
})
