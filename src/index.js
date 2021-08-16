document.addEventListener("DOMContentLoaded", () => {

  let createTask = document.getElementById("create-task-form");
  let newTask = document.getElementById("new-task-description");
  let tasks = document.getElementById("tasks")

  createTask.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log(newTask.value)
    console.log(tasks)
    //create li
    //set li text to newTask.value
    let li = document.createElement("li");
    tasks.appendChild(li);
    li.innerHTML = newTask.value;

    let btn = document.createElement("button");
    btn.innerHTML = "X";
    btn.dataset.description = newTask.value
    btn.addEventListener('click', function (evt) {
    console.log(li)
    li.remove();
    }) 
    li.appendChild(btn)

  
  })


  //create button <button data-description="shower">X</button>
  //set button text to X 
  // set data-description to newTask.value
  // add button to li

  //add li to "tasks"
})

// document.getElementById('textbox_id').value