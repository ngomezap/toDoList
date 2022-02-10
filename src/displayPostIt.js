import { whiteboard } from "./createPostIt";

const displayPostIt = function(){
    clear();
    
    console.log(this)
    const postItName = this.firstChild.nodeValue;
    whiteboard.listOfPostIts.forEach((e) => {
        if (e.name === postItName){
            const post = document.createElement('div');
            post.innerText = postItName;
            document.body.appendChild(post);
        }
    })
}

const clear = function(){
    document.body.childNodes.forEach(node => {
        node.remove();
    })
}

export {displayPostIt}