import chickenImage from './assets/images/chicken.png';
import beefImage from './assets/images/beef.png';
import beanImage from './assets/images/bean.png';
import mysteryImage from './assets/images/mystery.png';

export default function renderMenu(rootSelector) {
    let buttons = document.querySelectorAll("button")
    let menuButton = document.querySelector("#menu");
    let root = document.querySelector(rootSelector);
    root.innerHTML = "";
    buttons.forEach((button) => {
        button.classList.remove("active");
    })
    menuButton.classList.add("active");
    const menuCon = document.createElement("div");
    menuCon.classList.add("menuCon");
    const price = document.createElement("p");
    price.innerText = "Price 16.00";
    const chickenDiv = document.createElement("div");
    const chickenPic = document.createElement("img");
    chickenPic.src = chickenImage;
    chickenDiv.append(chickenPic, price);
    const beefDiv = document.createElement("div");
    const beefPic = document.createElement("img");
    beefPic.src = beefImage;
    beefDiv.append(beefPic, price.cloneNode(true));
    const beanDiv = document.createElement("div");
    const beanPic = document.createElement("img");
    beanPic.src = beanImage;
    beanDiv.append(beanPic, price.cloneNode(true));
    const mysteryDiv = document.createElement("div");
    const mysteryPic = document.createElement("img");
    mysteryPic.src = mysteryImage;
    mysteryDiv.append(mysteryPic, price.cloneNode(true));
    menuCon.append(chickenDiv, beefDiv, beanDiv, mysteryDiv);
    root.append(menuCon);
}