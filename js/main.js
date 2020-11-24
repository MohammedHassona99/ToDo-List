// Setting Up variable

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
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
    //Remove no message
    noTasksMessage.remove();

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
  }
};