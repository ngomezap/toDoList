import { whiteboard } from "./createPostIt";

const displayWhiteboard = function(){

    const whiteBoard = designWhiteBoard().wb;

    document.body.appendChild(whiteBoard);
    whiteboard.listOfPostIts.forEach(e => {
        //Post It container
        const div = document.createElement('div');
        div.classList.add('postIt');

        //Post It title
        const title = document.createElement('h3');
        title.innerText = e.name;
        div.appendChild(title)
        
        //Post It task container
        const tkCont = document.createElement('div');
        tkCont.setAttribute('id', 'tkCont');

        //List of Tasks
        const list = document.createElement('ul');
        tkCont.appendChild(list);
        div.appendChild(tkCont);

        e.listOfTasks.forEach(lt => {
            const task = document.createElement('li');
            task.innerText = lt.text;
            list.appendChild(task);
        });

        //Stick Post It to Canvas
        [...whiteBoard.childNodes].forEach((e) => {
            [...e.childNodes].forEach((n) => {
                if(n.id === "canvas"){
                    n.appendChild(div);
                }
            })
        })
    })
}

const designWhiteBoard = function(){
    //Whiteboar containing the div
    const wb = document.createElement('div');
    wb.setAttribute('id', 'whiteboard');

    //Top
    const wbTop = document.createElement('div');
    wbTop.setAttribute('class', 'wbTop');
    const wbTopLcorner = document.createElement('div');
    wbTopLcorner.setAttribute('class', 'wbTopCorner');
    const wbTopRcorner = document.createElement('div');
    wbTopRcorner.setAttribute('class', 'wbTopCorner');

    wbTop.appendChild(wbTopLcorner);
    wbTop.appendChild(wbTopRcorner);
    

    //Central part of whiteboar
    const wbCentral = document.createElement('div');
    wbCentral.setAttribute('id', 'wbCenter');

    const canvas = document.createElement('div');
    canvas.setAttribute('id', 'canvas');
    
    //Left 
    const wbLeft = document.createElement('div');
    wbLeft.classList.add('wbLateral');
    const wbLeftTop = document.createElement('div');
    wbLeftTop.classList.add('wbLateralTop');
    const wbLeftBottom = document.createElement('div');
    wbLeftBottom.classList.add('wbLateralBottom');

    wbLeft.appendChild(wbLeftTop);
    wbLeft.appendChild(wbLeftBottom);

    //Right
    const wbRight = document.createElement('div');
    wbRight.classList.add('wbLateral');
    const wbRightTop = document.createElement('div');
    wbRightTop.classList.add('wbLateralTop');
    const wbRightBottom = document.createElement('div');
    wbRightBottom.classList.add('wbLateralBottom');

    wbRight.appendChild(wbRightTop);
    wbRight.appendChild(wbRightBottom);

    wbCentral.appendChild(wbLeft);
    wbCentral.appendChild(canvas);
    wbCentral.appendChild(wbRight);
    

    //Bottom

    const wbBottom = document.createElement('div');
    wbBottom.setAttribute('class', 'wbTop');
    const wbBottomLcorner = document.createElement('div');
    wbBottomLcorner.setAttribute('class', 'wbBottomCorner');
    const wbBottomRcorner = document.createElement('div');
    wbBottomRcorner.setAttribute('class', 'wbBottomCorner');

    wbBottom.appendChild(wbBottomLcorner);
    wbBottom.appendChild(wbBottomRcorner);
    
    wb.appendChild(wbTop);
    wb.appendChild(wbCentral);
    wb.appendChild(wbBottom);

    return {wb}
    
}

export {displayWhiteboard}