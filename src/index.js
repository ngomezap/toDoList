import { controller } from "./controller";
import clear from './clear';
import './style.css'


const nav = document.createElement('nav');
const homeBtn = document.createElement('button');
const addBtn = document.createElement('button');
addBtn.innerText = "ADD";
homeBtn.innerText = 'HOME';
nav.appendChild(homeBtn);
nav.appendChild(addBtn);
document.body.appendChild(nav);

homeBtn.addEventListener('click', () => {
    clear();
    controller();
});

addBtn.addEventListener('click', controller);

controller();