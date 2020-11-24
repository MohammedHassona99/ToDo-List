// Setting Up variable

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let noTasksMessage = document.querySelector(".tasks-content .no-tasks-message");
let tasksCount = document.querySelector(".task-stats .tasks-count span");
let tasksCompleted = document.querySelector(
  ".task-stats .completed-tasks span"
);

// Focus on Input field

window.onload = function () {
  theInput.focus();
};

//adding the tasks

theAddButton.onclick = function () {
  //if the input is empty
  if (theInput.value === "") {
    swal("Your Field isn't empty", {
      className: "red-bg",
    });
  } else {
    let tasksContainer = document.querySelector(".tasks-content");

    //check if the span with no tasks message is exist
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      //Remove no message
      noTasksMessage.remove();
    }

    //Create main Span Element
    let mainSpan = document.createElement("span");

    // create Delete button
    let deleteButton = document.createElement("span");

    //create the main span text
    let text = document.createTextNode(theInput.value);

    //create the delete button text
    let deleteText = document.createTextNode("Delete");

    //add text to main span
    mainSpan.appendChild(text);

    //add class to main span
    mainSpan.className = "task-box";

    //add text to delete button
    deleteButton.appendChild(deleteText);

    //add class to delete button
    deleteButton.className = "delete";

    //add Delete button to main span
    mainSpan.appendChild(deleteButton);

    //add the tasks to the container
    tasksContainer.appendChild(mainSpan);

    theInput.value = "";

    theInput.focus();

    //cal tasks
    calTasks();
  }
};

document.addEventListener("click", function (e) {
  //delete task
  if (e.target.className === "delete") {
    //remove current task
    e.target.parentNode.remove();

    //check number of tasks inside the container
    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }
  //finish task
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }

  //cal tasks
  calTasks();
});

// Function to create no tasks message
function createNoTasks() {
  //create message span element
  let msgSpan = document.createElement("span");

  //create the text message
  let msgText = document.createTextNode("No Tasks To Show");

  // Add text to message span element
  msgSpan.appendChild(msgText);

  // add class to message span
  msgSpan.className = "no-tasks-message";

  //append the message span element to the task container

  tasksContainer.appendChild(msgSpan);
}

// Calculate all tasks

function calTasks() {
  //calc all tasks
  tasksCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;

  //calc completed tasks
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
