const input = document.querySelector("input")
const btn = document.querySelector("button")
const To_do = document.querySelector(".Todo")

var todos = {
    todo: localStorage.getItem('todos')
};
function loadTodos() {

    To_do.innerHTML = todos.todo;
}
loadTodos();



btn.addEventListener(('click'), () => {
    if (input.value) {
        const newtodo = document.createElement('div');
        newtodo.className = "newTask";
        newtodo.style.margin = "5px";
        newtodo.style.marginLeft = "0px";
        newtodo.style.width = "400px";
        newtodo.style.color = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
        newtodo.style.fontFamily = "Brush Script MT, Brush Script Std, cursive	";
        newtodo.style.fontSize = "30px";
        newtodo.style.textAlign = "justify";
        newtodo.style.overflowWrap = "break-word";
        newtodo.style.paddingLeft = "8px";
        // newtodo.style.border = "1px solid black";
        newtodo.style.minHeight = "50px";
        newtodo.style.backgroundColor = "#FFD700";
        newtodo.style.display = "inline-block";
      

        const li = document.createElement("li");
        li.style.listStyleType = "none";
        li.style.width = "570px";
        li.className = "todolist";

        const del = document.createElement('button');
        del.innerHTML = '<i class="fa fa-trash-o" ></i>';
        del.className = "erase";
        del.style.height = "27px";
        del.style.width = "30px";
        del.style.backgroundColor = "Tomato";
        del.style.border = "1px solid white";
        del.style.color = "white";
        del.style.borderRadius = "10px";
        del.style.float = "right";
        del.style.marginTop = "5px";
        del.style.display = "inline-block";


        const comp = document.createElement('button');
        comp.innerHTML = "DONE";
        comp.className = "dOne";
        comp.style.height = "27px";
        comp.style.width = "60px";
        comp.style.backgroundColor = "MediumSeaGreen";
        comp.style.border = "1px solid white";
        comp.style.color = "white";
        comp.style.borderRadius = "10px";
        comp.style.float = "right";
        comp.style.marginTop = "5px";


        let x = input.value.trim()
        if (x != "") {
            newtodo.innerHTML = x;
            li.appendChild(newtodo);
            li.appendChild(del);
            li.appendChild(comp);
            To_do.appendChild(li);
            localStorage.setItem('todos', To_do.innerHTML);

        }
        input.value = "";
    }
    todos.todo = localStorage.getItem('todos');
    loadTodos();
})


To_do.addEventListener(('click'), (event) => {
    console.log(event.target.classList);
    if (event.target.classList.contains("erase")) {
        console.log("yes");
        event.target.parentElement.remove();
        localStorage.setItem('todos', To_do.innerHTML);
    }
    else if (event.target.classList.contains("fa-trash-o")) {
        event.target.parentElement.parentElement.remove();
        localStorage.setItem('todos', To_do.innerHTML);

    }
    else if (event.target.classList.contains("dOne")) {
        event.target.parentElement.firstChild.style.backgroundColor = "green";
    }
    else if (event.target.classList.contains("dOne")) {
        event.target.parentElement.firstChild.style.backgroundColor = "green";
    }
})

function dele(event) {
    event.target.parentElement.remove();
    localStorage.setItem('todos', To_do.innerHTML);
}

