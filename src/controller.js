import { displayWhiteboard } from "./displayWhiteboard"
import { displayPostIt } from "./displayPostIt"
import { displayAddPostIt } from "./displayAddPostIt";
import clear from './clear';

const controller = function(){
    //Display the whiteboard by default
    displayWhiteboard();

    //Create Listeners
    listeners();

}

const listeners = function(){
    const homeBtn = document.getElementById('homeBtn');
    const addBtn = document.getElementById('addBtn');
    const wb = document.getElementById('whiteboard').querySelectorAll('.postIt');
    
    homeBtn.addEventListener('click', () => {
        clear();
        controller();
    });
    
    addBtn.addEventListener('click',() => {
        clear();
        displayAddPostIt();
    });

    //Add event listeners to post its
    wb.forEach(e => {
        e.addEventListener('click', displayPostIt);
    })
}


export {controller}