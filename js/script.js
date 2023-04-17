const email = document.querySelector("#email-icon")
const newEmailItem = document.createElement("p")

email.addEventListener("click", () => {
    newEmailItem.innerHTML = "masovekoryta.ostrava@gmail.com"
email.parentNode.replaceChild(newEmailItem,email)
})

newEmailItem.classList.add("jsEmailShown")








const emailBack = document.createElement("p")
newEmailItem.addEventListener("click", () => {
    emailBack.innerHTML =`<img class="header__icons-email" id="email-icon" src="images/mail_bw_32.png" alt="ikona obálky">` 
    newEmailItem.parentNode.replaceChild(emailBack,newEmailItem)
})



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
