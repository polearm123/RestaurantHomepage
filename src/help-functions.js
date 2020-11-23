
const mainContent = document.createElement("div")
mainContent.id = "content";

const loadTabOne = () => { //clears and loads the first tab to content

    mainContent.innerHTML = "";
    console.log("tab one clicked");
    const headline = document.createElement("div");
    headline.innerHTML = "Paligioni's pizza";
    mainContent.appendChild(headline);
    document.body.appendChild(mainContent);

}

const loadTabTwo = () => {//clears current content and loads second tab

    mainContent.innerHTML = "";
    console.log("tab 2 clicked");
    const subheading = document.createElement("div");
    subheading.innerHTML = "the best in napoli";
    mainContent.appendChild(subheading);
    document.body.appendChild(mainContent);
    
}

const loadTabThree = () => {//clears current content and loads third tab

    mainContent.innerHTML = "";
    console.log("tab 3 clicked");
    const information = document.createElement("div");
    information.innerHTML = "the number 1 rated pizza chain in napoli brings their excuisite central european pallete to the UK";
    mainContent.appendChild(information);
    document.body.appendChild(mainContent);

}


export {loadTabOne,loadTabTwo,loadTabThree};