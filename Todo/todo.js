User


const Tasklist= []

function Addtasks(){
    const taskinput= document.getElementById('taskinput');
    const newtask= taskinput.value.trim();
    if(newtask){
        Tasklist.push(newtask);
        taskinput.value= '';
        displayTasks();
    
    }
}

function completedTasks(event){
    const task= event.target;
    task.classList.toggle('Completed');
}

function displayTasks(){
    const elements=document.getElementById('mytasks');
    for(let i=0; i< Tasklist.length ; i++){
        const List= document.createElement('li');
        List.innerText= Tasklist[i];
        elements.appendChild(List);
        
        const button= document.createElement('button')
        button.addEventListener('click', completedTasks);
        List.appendChild(button)
    }
}

function reminder(){
    pass
}

document.getElementById('Add Task').addEventListener('Click', Addtasks)