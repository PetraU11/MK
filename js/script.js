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





//CATERING


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




// REREFENCE - ChatGPT

/*
    // Načtení uložených komentářů při načtení stránky
    loadFromLocalStorage();
  
    // Přidejte posluchače událostí pro odeslání formuláře
    const form = document.querySelector(".reference__form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Získejte hodnoty vstupních polí
      const name = document.getElementById("jmeno").value;
      const date = document.getElementById("datum").value;
      const experience = document.getElementById("info").value;
  
      // Uložte komentář do localStorage
      saveToLocalStorage(name, date, experience);
  
      // Vyčištění formuláře
      form.reset();
  
      // Zobrazte potvrzení odeslání
      const submitDone = document.querySelector(".form_submit-done");
      submitDone.style.display = "block";
  
      // Aktualizace zobrazení komentářů
      loadFromLocalStorage();
    });
  
  
  function saveToLocalStorage(name, date, experience) {
    if (typeof(Storage) !== "undefined") {
      let comments = JSON.parse(localStorage.getItem("commentData")) || {};
      const id = Date.now().toString(); // Unikátní identifikátor pro každý komentář
      comments[id] = { name, date, experience };
      localStorage.setItem("commentData", JSON.stringify(comments));
    } else {
      console.error("LocalStorage není k dispozici.");
    }
  }
  
  function loadFromLocalStorage() {
    if (typeof(Storage) !== "undefined") {
      const commentDiv = document.querySelector(".reference__comment");
      const storedData = localStorage.getItem("commentData");
      if (storedData) {
        const comments = JSON.parse(storedData);
        let commentsHTML = "";
        Object.values(comments).forEach(comment => {
          commentsHTML += `
            <div class="comment"> 
              <p>Jméno: ${comment.name} || Datum: ${comment.date}</p>
              <p class="comment__feedback">" ${comment.experience} "</p>
            </div>
          `;
        });
        commentDiv.innerHTML = commentsHTML;
      }
    } else {
      console.error("LocalStorage není k dispozici.");
    }
  }
  
 // localStorage.clear()

 */