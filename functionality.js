const task = document.querySelector("#Task");
const list = document.querySelector("#todo_list"); 
const addbtn = document.querySelector('#add');
const cancel = document.querySelector('#cancel');



task.addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        if (this.value == ""){
            alert("please write a task");
        }
        else {
        addtodo(this.value);
        this.value = "";
    }
    }
})

addbtn.onclick = function (items) {
    if (task.value.length == ""){
        alert("please write a task");
    }

    else{
        addtodo(task.value);
        task.value = "";
}
}

cancel.addEventListener("click" , function () {
    task.value = "";
})





function addtodo(items) {
    const listview = document.createElement("li");
    listview.innerHTML = `${items}   <i class="fa-sharp fa-solid fa-trash"> </i>`;


    listview.querySelector("i").addEventListener("click", function () {
    listview.remove();
    })

        list.appendChild(listview);
}