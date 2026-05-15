let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");


function accessInput(eventObject) {
    let inputValue = themeUserInputEl.value;
    if (inputValue === "Dark" && eventObject.key === "Enter") {
        bgContainerEl.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')"
        headingEl.style.color = "white";

    } else if (inputValue === "Light" && eventObject.key === "Enter") {
        bgContainerEl.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')"
        headingEl.style.color = "#014d40";

    } else if (eventObject.key === "Enter") {
        alert("Enter the valid theme");
    }

}

themeUserInputEl.addEventListener("keydown", accessInput);