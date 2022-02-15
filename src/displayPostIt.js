import { whiteboard } from "./createPostIt";
import clear from './clear';

const displayPostIt = function(){
    clear();
    const postItName = this.firstChild.nodeValue;
    whiteboard.listOfPostIts.forEach((e) => {
        if (e.name === postItName){
            const post = document.createElement('div');
            post.innerText = postItName;
            document.body.appendChild(post);
        }
    })
}



export {displayPostIt}