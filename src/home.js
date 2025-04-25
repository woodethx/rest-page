export default function renderHome(rootSelector) {
    let buttons = document.querySelectorAll("button")
    let homeButton = document.querySelector("#home");
    let root = document.querySelector(rootSelector);
    root.innerHTML = "";
    buttons.forEach((button) => {
        button.classList.remove("active");
    })
    homeButton.classList.add("active");
    const homeCon = document.createElement("div");
    homeCon.classList.add("homeCon");
    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("homeBlock");
    const welcomeHead = document.createElement("h3");
    welcomeHead.innerText = "Welcome to Maldonados Homemade Tamales!";
    const welcomeBody = document.createElement("p");
    welcomeBody.innerText = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    welcomeDiv.append(welcomeHead, welcomeBody);
    const testDiv = document.createElement("div");
    testDiv.classList.add("homeBlock")
    const testHead = document.createElement("h3")
    testHead.innerText = "Testimonials"
    const testOne = document.createElement("p")
    testOne.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>-Ethan Wood<br><br>"
    const testTwo = document.createElement("p")
    testTwo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>-Marissa Wood"
    testDiv.append(testHead,testOne,testTwo);
    homeCon.append(welcomeDiv,testDiv);
    root.append(homeCon);
}