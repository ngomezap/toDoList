import { controller } from "./controller";
import clear from './clear';
import './style.css'


const nav = document.createElement('nav');
const homeBtn = document.createElement('button');
homeBtn.innerText = 'HOME';
nav.appendChild(homeBtn);
document.body.appendChild(nav);

homeBtn.addEventListener('click', () => {
    clear();
    controller();
});

controller();