const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        // alert("You must write something!");
    }   
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Now to add the Cross Icon to delete the entered task.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
}

//Not to make the task be checked and unchecked when it is clicked upon the li element.
// Delete the task when clicked on the cross icon.

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},
false);

//As the data is not stored anywhere, it is cleared as soon as we refresh the web page. To prevent this it must be stored somewhere. It can be stored in the server or locally. I wil save it locally to decrease complexity.

//This function need to be called when we check/uncheck a task or delete a task also when we create a new task.
function saveTask(){ 
    localStorage.setItem("data",listContainer.innerHTML); // To save the data of listContainer. 
}

//Function To display the data stored locally.
function displayTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// this funciton must be called every time the script runs.
displayTask();