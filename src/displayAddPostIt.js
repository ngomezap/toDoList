

export default function displayAddPostIt(){

    //Numer of tasks counter
    const counter = 0;

    //Create ADD form container
    const addContainer = document.createElement('div');
    addContainer.setAttribute('id', 'addContainer');


    const addTitle = document.createElement('input');
    const addTitleLabel = document.createElement('label');
    addTitle.setAttribute('type', 'text');
    addTitle.setAttribute('id', 'addTitle');
    addTitleLabel.setAttribute('for', 'addTitle');
    addTitleLabel.innerText = "Title";


    const addTask = document.createElement('input');
    const addTaskLabel = document.createElement('label');
    addTask.setAttribute('type', 'text');
    addTask.classList.add('addTask');
    addTask.setAttribute('id', `task${counter}`);
    addTaskLabel.setAttribute('for', `task${counter}`);
    addTaskLabel.innerText = `Task ${counter}`;

    addContainer.appendChild(addTitleLabel);
    addContainer.appendChild(addTitle);
    addContainer.appendChild(addTaskLabel);
    addContainer.appendChild(addTask);
    document.body.appendChild(addContainer);
}
