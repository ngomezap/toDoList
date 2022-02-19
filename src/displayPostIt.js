import { whiteboard } from "./createPostIt";
import clear from './clear';

const displayPostIt = function(e){
    clear();
    
    whiteboard.listOfPostIts.forEach(postIt => {
        if(postIt.name === this.firstChild.nodeValue){
            
            const container = document.createElement('div');
            container.setAttribute('id', 'PView');
            const title = document.createElement('div');
            title.innerText = postIt.name;
            title.setAttribute('id', 'titlePView');
            container.appendChild(title);

            postIt.listOfTasks.forEach( task => {
                const taskDiv = document.createElement('div');
                taskDiv.innerText = task.text;
                taskDiv.classList.add('taskPView');
                container.appendChild(taskDiv);
            })
            document.body.appendChild(container);
        }
    })
}



export {displayPostIt}