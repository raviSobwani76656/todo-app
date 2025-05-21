


const inputField = document.getElementById("inputField");
const addTaskButton = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
taskList.classList.add("taskList");

const deleteAllTasks = document.getElementById("deleleAllBtn");


console.log(inputField);

addTaskButton.addEventListener("click", function () {

    const taskText = inputField.value;
    if (taskText === "") {
        alert("Please enter the task first");
        return;
    }

    const taskContainer = document.createElement("div");


    taskList.insertBefore(taskContainer, taskList.firstChild);

    let task = document.createElement("span")
    taskContainer.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteBtn")

    taskContainer.appendChild(deleteButton);


    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskContainer);


    })

    inputField.value = ""



})

deleteAllTasks.addEventListener("click", function () {
    taskList.innerHTML = ""
})






