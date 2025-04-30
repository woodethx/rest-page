export default function renderContact(rootSelector) {
    let buttons = document.querySelectorAll("button")
    let contactButton = document.querySelector("#contact");
    let root = document.querySelector(rootSelector);
    root.innerHTML = "";
    buttons.forEach((button) => {
        button.classList.remove("active");
    })
    contactButton.classList.add("active");
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    contactDiv.innerHTML = "<h3>Contact Info</h3> <p>Phone Number: (123) 456-7890</p> <p>Email: real.email@realwebsite.com<p/> <p>Address: 123 Anystreet</p>"
    root.append(contactDiv);
}