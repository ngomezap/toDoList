
const taskCreator = (text) => {return {text}}


const task1 = taskCreator("Hacer palomitas");
const task2 = taskCreator("Elegir peliculas");
const task3 = taskCreator("Comprar bebida");

const task4 = taskCreator("Forrar libros cole", "OrderedList");


const postItCreator = function (name){
    const listOfTasks = [];
    const id = 0;
    const addTask = function(task){
        listOfTasks.push(task);
    }
    const proto = Object.create(Object.assign({}, {addTask, id}));
    
    return Object.assign(proto, {name, listOfTasks})
}

/*
const postIt1 = postItCreator("Noche de peli");

const postIt2 = postItCreator("Cosas colegio Eduardo");

postIt1.addTask(task1);
postIt1.addTask(task2);
postIt1.addTask(task3);

postIt2.addTask(task4);
*/
const whiteboard = (function(){
    const listOfPostIts = [];
    let counter = 0;

    const stickPostIt = function(postIt){
        counter++;
        postIt.id = counter;
        listOfPostIts.push(postIt);
        
        //--------Save Post-Its in Local Storage-----------//
        //Save Post-It in Local Storage
        window.localStorage.setItem(`p${postIt.id}`, postIt.name);
        
        //Save tasks in Local Storage
        let tkCount = 1;
        postIt.listOfTasks.forEach(tk => {
            window.localStorage.setItem(`t${postIt.id}-${tkCount}`, tk.text);
            tkCount++;
        })
    }

    
    const removePostIt = function(postIt){
        listOfPostIts = listOfPostIts.filter(e => e !== postIt);
    }
    const showPostIts = function(){
        listOfPostIts.forEach(e => console.log(e));
    }

    //Add Local Sotorage post-its
    if(window.localStorage.length > 0){
        for(let i = 1; i <= window.localStorage.length; i++){
            if(window.localStorage.getItem(`p${i}`)){
                const postIt = postItCreator(window.localStorage.getItem(`p${i}`));
                for(let j = 1; j <= window.localStorage.length; j++){
                    if(window.localStorage.getItem(`t${i}-${j}`)){
                        postIt.addTask(taskCreator(window.localStorage.getItem(`t${i}-${j}`)));
                    }
                }
                stickPostIt(postIt);
            }
        }
    }


    const proto = Object.assign({}, {stickPostIt, removePostIt, showPostIts});

    return Object.assign(Object.create(proto), {listOfPostIts, counter});
})()

/*
whiteboard.stickPostIt(postIt1);
whiteboard.stickPostIt(postIt2);*/
whiteboard.showPostIts();


export {whiteboard, taskCreator, postItCreator}