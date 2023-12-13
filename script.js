const taskForm = document.getElementById('taskForm');
const taskinput = document.getElementById('taskinput');
const tasklist = document.getElementById('tasklist');
const taskCountDisplay = document.getElementById('taskCountDisplay');


let taskid = 1;

function updateTaskCount() {
    const taskCount = document.querySelectorAll('.taskitem').length;
    console.log("Task count updated:", taskCount);
    taskCountDisplay.textContent = `Total tasks: ${taskCount}`;
}


function addtask(event){
    event.preventDefault()
    const tasktext =taskinput.value.trim();


    if (tasktext !== ""){
        const taskitem = document.createElement('li');
        taskitem.className='taskitem';

        taskitem.innerHTML = `
        <span>${tasktext}</span>
        <button class= 'deletebtn'> delete</button>`;


        tasklist.appendChild(taskitem)
        taskinput.value="";
        taskid++;

        const deletebtn=taskitem.querySelector('.deletebtn')
        deletebtn.addEventListener('click', taskdelete);


        updateTaskCount()
 

    }
}
function taskdelete(event){
    const taskitem = event.target.parentNode;
    tasklist.removeChild(taskitem);
    updateTaskCount()


}
taskForm.addEventListener('submit', addtask);



  

