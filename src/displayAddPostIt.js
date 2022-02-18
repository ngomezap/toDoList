

export default function displayAddPostIt(){

    //Number of tasks counter
    let counter = 0;

    //Form container
    const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'formContainer');

    //Title container
    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('id', 'titleContainer');

    //Tasks container
    const tasksContainer = document.createElement('div');
    tasksContainer.setAttribute('id', 'tasksContainer');

    //Title
    const addTitle = document.createElement('input');
    const addTitleLabel = document.createElement('label');
    addTitle.setAttribute('type', 'text');
    addTitle.setAttribute('id', 'addTitle');
    addTitleLabel.setAttribute('for', 'addTitle');
    addTitleLabel.innerText = "Title";
    titleContainer.appendChild(addTitleLabel);
    titleContainer.appendChild(addTitle);

    //Button Add Task
    const btnAddTask = document.createElement('button');
    btnAddTask.innerText = "Add Task";
    btnAddTask.addEventListener('click', () =>{

        removeEmptyTasks();
        const newTask = createTask(counter);
        tasksContainer.appendChild(newTask.taskCont);
        counter ++;
    });

    //Button Send PostIt
    const btnStickPostIt = document.createElement('button');
    btnStickPostIt.innerText = "StickPostIt";
    btnStickPostIt.addEventListener('click', () =>{
        
    });

    //Append all
    formContainer.appendChild(titleContainer);
    formContainer.appendChild(tasksContainer);
    formContainer.appendChild(btnAddTask);
    formContainer.appendChild(btnStickPostIt);
    document.body.appendChild(formContainer);
}


//This function if a task creator that returns a 'div'
//with all the tasks added to the postIt

function createTask(counter){
    //Task container
    const taskCont = document.createElement('div');
    taskCont.setAttribute('id', `taskCont${counter}`);

    //Task inpunt and label
    const addTask = document.createElement('input');
    const addTaskLabel = document.createElement('label');
    addTask.setAttribute('type', 'text');
    addTask.classList.add('addTask');
    addTask.setAttribute('id', `task${counter}`);
    addTaskLabel.setAttribute('for', `task${counter}`);
    addTaskLabel.innerText = "Task";

    //Remove task button
    const btnRmvTask = document.createElement('button');
    btnRmvTask.innerText = "Delete";
    btnRmvTask.addEventListener('click', removeTask);


    taskCont.appendChild(addTaskLabel);
    taskCont.appendChild(addTask);
    taskCont.appendChild(btnRmvTask);

    return {taskCont}
}

function removeTask(e){
    e.target.parentNode.remove();  
}

function removeEmptyTasks(){
    /*Check that every task has text on it when
    adding a new task. If so, remove the empty ones*/
    const tC = [...document.getElementById('tasksContainer').childNodes]
    tC.forEach((t) => {
        if([...t.childNodes].at(1).value.length === 0){
            t.remove();
        }
    })
}