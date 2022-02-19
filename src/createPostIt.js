
const taskCreator = (text) => {return {text}}


const task1 = taskCreator("Hacer palomitas", "Check");
const task2 = taskCreator("Elegir peliculas", "Check");
const task3 = taskCreator("Comprar bebida", "Check");

const task4 = taskCreator("Forrar libros cole", "OrderedList");


const postItCreator = function (name){
    const listOfTasks = [];
    const addTask = function(task){
        listOfTasks.push(task);
    }
    const proto = Object.create(Object.assign({}, {addTask}));
    
    return Object.assign(proto, {name, listOfTasks})
}





const postIt1 = postItCreator("Noche de peli");

const postIt2 = postItCreator("Cosas colegio Eduardo");

postIt1.addTask(task1);
postIt1.addTask(task2);
postIt1.addTask(task3);

postIt2.addTask(task4);

const whiteboard = (function(){
    const listOfPostIts = [];
    const stickPostIt = function(postIt){
        listOfPostIts.push(postIt);
    }
    const removePostIt = function(postIt){
        listOfPostIts = listOfPostIts.filter(e => e !== postIt);
    }
    const showPostIts = function(){
        listOfPostIts.forEach(e => console.log(e));
    }

    const proto = Object.assign({}, {stickPostIt, removePostIt, showPostIts});

    return Object.assign(Object.create(proto), {listOfPostIts});
})()

whiteboard.stickPostIt(postIt1);
whiteboard.stickPostIt(postIt2);
whiteboard.showPostIts();


export {whiteboard, taskCreator, postItCreator}