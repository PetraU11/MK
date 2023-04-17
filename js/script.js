const email = document.querySelector("#email-icon")
const newEmailItem = document.createElement("p")

email.addEventListener("click", () => {
    newEmailItem.innerHTML = "masovekoryta.ostrava@gmail.com"
email.parentNode.replaceChild(newEmailItem,email)
})

newEmailItem.classList.add("jsEmailShown")





const phone = document.querySelector("#phone-icon")
const newPhoneItem = document.createElement("p")

phone.addEventListener("click", () => {
    newPhoneItem.innerHTML = "+420 725 815 017"
    phone.parentNode.replaceChild(newPhoneItem,phone)
})

newPhoneItem.classList.add("jsPhoneNumberShown")



