// .checked = property that determines the checked state of an HTML checkbox or radio button element

const checkbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const rupaybtn = document.getElementById("rupaybtn");
const submit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

submit.onclick = function () {
    // Check subscription status
    if (checkbox.checked) {
        subresult.textContent = "You're subscribed";
    } else {
        subresult.textContent = "You are not subscribed";
    }

    // Check which payment option is selected
    if (visabtn.checked) {
        paymentresult.textContent = "You selected Visa";
    } else if (masterbtn.checked) {
        paymentresult.textContent = "You selected Master";
    } else if (rupaybtn.checked) {
        paymentresult.textContent = "You selected Rupay";
    } else {
        paymentresult.textContent = "No payment option selected";
    }
};
