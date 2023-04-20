
const phone = document.querySelector("#phone-icon")
const newPhoneItem = document.createElement("p")

phone.addEventListener("click", () => {
    newPhoneItem.innerHTML = "+420 725 815 017"
    phone.parentNode.replaceChild(newPhoneItem,phone)
})

newPhoneItem.classList.add("jsPhoneNumberShown")

const phoneBack = document.createElement("p")
newPhoneItem.addEventListener("click", () => {
    phoneBack.innerHTML =`<img class="header__icons-phone" id="phone-icon" src="images/phone_bw_32.png" alt="ikona telefonu">` 
    newPhoneItem.parentNode.replaceChild(phoneBack,newPhoneItem)
})


*/

const email = document.querySelector("#email-icon")
const emailShown = document.querySelector("#email-address")

email.addEventListener("click", () => {
   // email.classList.toggle("header__icons-emailIconHidden")
    emailShown.classList.toggle("header__icons-emailAddressHidden")
    emailShown.classList.toggle("header__icons-emailAddressShown")
    
})

emailShown.addEventListener("click",() => {
    emailShown.classList.remove("header__icons-emailAddressShown")
    emailShown.classList.add("header__icons-emailAddressHidden")
    // email.classList.toggle("header__icons-emailIconHidden")
})




const phone = document.querySelector("#phone-icon")
const phoneShown = document.querySelector("#phone-number") 

phone.addEventListener("click", () => {
    // phone.classList.toggle("header__icons-phoneIconHidden")
    phoneShown.classList.toggle("header__icons-phoneNumberHidden")
    phoneShown.classList.toggle("header__icons-phoneNumberShown")
    
})

phoneShown.addEventListener("click",() => {
    phoneShown.classList.remove("header__icons-phoneNumberShown")
    phoneShown.classList.add("header__icons-phoneNumberHidden")
    // phone.classList.toggle("header__icons-phoneIconHidden")
})