import './style.css'
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderContact from "./contact.js";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");
renderHome("#content");

menu.addEventListener("click", () => renderMenu("#content"));
home.addEventListener("click", () => renderHome("#content"));
contact.addEventListener("click", () => renderContact("#content"));

