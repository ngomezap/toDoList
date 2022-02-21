import { controller } from "./controller";
import './style.css'


const nav = document.createElement('nav');
const name = document.createElement('h1');
name.innerText = "WHITEBOARD";
const homeBtn = document.createElement('button');
homeBtn.setAttribute('id', 'homeBtn');
const addBtn = document.createElement('button');
addBtn.setAttribute('id', 'addBtn');
addBtn.innerText = "ADD";
homeBtn.innerText = 'HOME';
nav.appendChild(homeBtn);
nav.appendChild(addBtn);
nav.appendChild(name);
document.body.appendChild(nav);


controller();