import { displayWhiteboard } from "./displayWhiteboard"
import { displayPostIt } from "./displayPostIt"


const controller = function(){
    //Display the whiteboard by default
    displayWhiteboard();

    //Add event listeners to post its
    const wb = document.getElementById('whiteboard').querySelectorAll('.postIt');
    wb.forEach(e => {
        e.addEventListener('click', displayPostIt);
    })
}


export {controller}