import { whiteboard } from "./createPostIt";
import clear from './clear';
import { controller } from "./controller";

const displayPostIt = function(e){
    clear();
    
    whiteboard.listOfPostIts.forEach(postIt => {
        if(postIt.name === this.firstChild.innerText){
            //Post-It container
            const container = document.createElement('div');
            container.setAttribute('id', 'PView');
            
            //Top part of Post-It
            const top = document.createElement('div');
            top.setAttribute('id', 'topPView');
                //Title (TOP)
            const title = document.createElement('div');
            title.innerText = postIt.name;
            title.setAttribute('id', 'titlePView');
            top.appendChild(title);
                //Remove Button (TOP)
            const rmvButtonPView = document.createElement('button');
            rmvButtonPView.innerText = "X";
            rmvButtonPView.setAttribute('id', 'rmvPView');
            rmvButtonPView.addEventListener('click', () => {
                whiteboard.removePostIt(postIt);
                clear();
                controller();
            })
            top.appendChild(rmvButtonPView);

            container.appendChild(top);
            

            //Tasks container
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