document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

  taskForm.addEventListener("submit", function(e) {
    // stop the refresh on clicking submit
    e.preventDefault()
    // grabbing the user input
    const newTask = document.querySelector("#new-task-description").value
    // get it on the DOM
    // const taskItem = document.createElement("li")
    // taskItem.innerText = newTask 
    // taskList.appendChild(taskItem)
    taskList.innerHTML += `
    <li> ${newTask} 
      <button data-action="delete">X for delete</button>
    </li>

    `
    taskForm.reset() 
  })

  taskList.addEventListener("click", function(e) {
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }
  })

});

// NOTES
// DOMContentLoaded or defer - if our <script> was in header
// we would have some issues because JS code could be calling
// for HTML elements that dont exist yet (code runs from top down)

// putting <script> in <head>
// defer attribute to <script> will delay executing the JS code
// async attribute to <script> will run JS code at same time as HTML
