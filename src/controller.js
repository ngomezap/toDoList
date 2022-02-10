import { displayWhiteboard } from "./displayWhiteboard"
import { displayPostIt } from "./displayPostIt"


const controller = function(){
    displayWhiteboard();
    const wb = document.getElementById('whiteboard').querySelectorAll('.postIt');
    wb.forEach(e => {
        e.addEventListener('click', displayPostIt);
    })
}


export {controller}