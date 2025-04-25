export default function renderContact(rootSelector) {
    let buttons = document.querySelectorAll("button")
    let contactButton = document.querySelector("#contact");
    let root = document.querySelector(rootSelector);
    root.innerHTML = "";
    buttons.forEach((button) => {
        button.classList.remove("active");
    })
    contactButton.classList.add("active");
}