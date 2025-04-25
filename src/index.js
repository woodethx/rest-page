import './style.css'
import renderHome from "./home.js";
import renderMenu from "./menu.js"

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
renderMenu("#content");

menu.addEventListener("click", () => renderMenu("#content"));
home.addEventListener("click", () => renderHome("#content"));

