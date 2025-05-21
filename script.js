


const inputField = document.getElementById("inputField");
const addTaskButton = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

console.log(inputField);

addTaskButton.addEventListener("click", function () {

    const task = inputField.value;
    if (task === "") {
        alert("Please enter the task first")
    }
    else {

        taskList.innerHTML += `<ul>${task}</ul>`;
        inputField.value = "";
    }

})

const clearButton = document.getElementById("clear-all-btn").addEventListener("click", function () {
    taskList.innerHTML = "";
})

const deleteButton = document.createElement('button');



