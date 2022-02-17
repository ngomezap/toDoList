import { displayWhiteboard } from "./displayWhiteboard"
import { displayPostIt } from "./displayPostIt"
import displayAddPostIt from "./displayAddPostIt";

const controller = function(){
    //Display the whiteboard by default
    //displayWhiteboard();

    displayAddPostIt();
    /*
    //Add event listeners to post its
    const wb = document.getElementById('whiteboard').querySelectorAll('.postIt');
    wb.forEach(e => {
        e.addEventListener('click', displayPostIt);
    })*/
}


export {controller}