document.addEventListener("DOMContentLoaded", () => {

  let createTask = document.getElementById("create-task-form");
  let newTask = document.getElementById("new-task-description");
  let newTaskPriority = document.getElementById("new-task-priority");
  let tasks = document.getElementById("tasks")

  createTask.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log(newTask.value)
    console.log(tasks)
    //create li
    let node = document.createElement('li');
    //set li text to newTask.value

    
    //create button <button data-description="shower">X</button>
    //set button text to X 
    // set data-description to newTask.value
    // add button to li

    //add li to "tasks"
  })
});
// document.getElementById('textbox_id').value