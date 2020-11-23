import {loadTabOne,loadTabThree,loadTabTwo} from './help-functions';
import './styles.css';


const tabOne = document.getElementById("tab1");
tabOne.onclick = loadTabOne;

const tabTwo = document.getElementById("tab2");
tabTwo.onclick = loadTabTwo;

const tabThree = document.getElementById("tab3");
tabThree.onclick = loadTabThree;


// const tabButtons = document.querySelectorAll(".tablink");

// console.log(tabButtons);

// tabButtons.forEach((tab) => {

//     if(tab.id == "tab1"){

//         tab.addEventListener("click",loadTabOne());

//     }else if(tab.id == "tab2"){

//         tab.addEventListener("click",loadTabTwo());


//     }else if(tab.id == "tab3"){

//         tab.addEventListener("click",loadTabThree());

//     }

// })

