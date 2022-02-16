import { whiteboard } from "./createPostIt";
import clear from './clear';

const displayPostIt = function(e){
    clear();
    
    whiteboard.listOfPostIts.forEach(postIt => {
        if(postIt.name === this.firstChild.nodeValue){
            const title = document.createElement('div');
            title.innerText = postIt.name;
            document.body.appendChild(title);

            postIt.listOfTasks.forEach( task => {
                const taskDiv = document.createElement('div');
                taskDiv.innerText = task.text;
                taskDiv.classList.add('task');
                document.body.appendChild(taskDiv);
            })
        }
    })
}



export {displayPostIt}