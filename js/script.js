const hamburger = document.getElementById("menuBars")
const hamburgerMenu = document.getElementById("menuList")
const bar1 = document.getElementById("bar1")
const bar2 = document.getElementById("bar2")
const bar3 = document.getElementById("bar3")

hamburger.addEventListener("click", () => {
   if (hamburgerMenu.classList.contains("open")){
    hamburger.style.marginTop = "0px"
    hamburgerMenu.classList.remove("open")
    bar1.classList.remove("one")
    bar2.classList.remove("two")
    bar3.classList.remove("three")

} else {
    hamburger.style.marginTop = "36px"
    hamburgerMenu.classList.add("open")
    bar1.classList.add("one")
    bar2.classList.add("two")
    bar3.classList.add("three")
}
})

let removeClass = () => {
    if(window.innerWidth > 699){
        hamburgerMenu.classList.remove("open")
    } else if ( window.innerWidth < 700){
    bar1.classList.remove("one")
    bar2.classList.remove("two")
    bar3.classList.remove("three")
    }}

window.addEventListener("resize", removeClass)
removeClass()








const showButton = document.getElementById("showList")
const hideButton = document.getElementById("hideList")
const listPartTwo = document.getElementById("listSecondPart")

showButton.addEventListener("click", () => {
listPartTwo.style.display = "inline-block"
listPartTwo.style.marginTop = "-16px"
showButton.style.display = "none"
hideButton.style.display = "inline-block"
})

hideButton.addEventListener("click", () => {
    listPartTwo.style.display = "none"
    hideButton.style.display = "none"
    showButton.style.display = "inline-block"

})




