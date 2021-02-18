id = 0;
function CreateElement() {
    var list = document.getElementById("mylist");
    var task = document.getElementById("task-input").value;
    var entry = document.createElement("li");
    var newTask = document.createElement("input");
    newTask.id = "task";
    newTask.type = "checkbox";
    entry.className = "";
    newTask.name = "checkbox";
    newTask.addEventListener('change', function() { 
        var checkBox = document.getElementsByName("checkbox");
        checkBox.forEach(element => {
            if (element.checked == true){
                element.parentElement.className = "checked";
            } else {
                element.parentElement.className = "";
            }
        });
    }, false);
    let delButton = document.createElement("button");
    delButton.className = "delButton";
    delButton.innerHTML = "X";
    delButton.addEventListener('click', function() { 
        entry.remove();
    });
    entry.appendChild(document.createTextNode(task));
    entry.appendChild(newTask);
    entry.appendChild(delButton);
    list.appendChild(entry);
    id++;
}
