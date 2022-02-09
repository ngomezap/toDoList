import { whiteboard } from "./createPostIt";

const displayPostIts = function(){
    whiteboard.listOfPostIts.forEach(e => {
        const div = document.createElement('div');
        div.innerText = e.name;
        div.classList.add('postIt');
        e.listOfTasks.forEach(lt => {
            const subdiv = document.createElement('div');
            subdiv.innerText = lt.text;
            div.appendChild(subdiv);
        })
        document.body.appendChild(div);
    })
}

export {displayPostIts}