import { whiteboard } from "./createPostIt";

const displayWhiteboard = function(){
    const whiteBoard = document.createElement('div');
    whiteBoard.setAttribute('id', 'whiteboard');
    document.body.appendChild(whiteBoard);
    whiteboard.listOfPostIts.forEach(e => {
        const div = document.createElement('div');
        div.innerText = e.name;
        div.classList.add('postIt');
        const list = document.createElement('ul');
        div.appendChild(list);
        e.listOfTasks.forEach(lt => {
            const task = document.createElement('li');
            task.innerText = lt.text;
            list.appendChild(task);
        })
        whiteBoard.appendChild(div);
    })
}

export {displayWhiteboard}