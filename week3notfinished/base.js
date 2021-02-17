function CreateElement() {
    var list = document.getElementById("mylist");
    var task = document.getElementById("task-input").value;
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(task));
    list.appendChild(entry);
}

