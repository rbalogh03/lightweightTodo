let addTodoButton = document.getElementById("addTodoButton");
let todoContainer = document.querySelector(".todoContainer");
let categorySelector = document.getElementById("categories");
let todos = [];

categorySelector.addEventListener("change",function(){
    let selectedCategory = categorySelector.options[categorySelector.selectedIndex].value;
    for (var i = 0; i < todoContainer.childNodes.length; i++) {
        if (todoContainer.childNodes[i].classList.contains("completedTodo") == false) {
            todoContainer.childNodes[i].style.display = "none"
        }
    }
    if (selectedCategory == "complete") {
        for (var i = 0; i < todoContainer.childNodes.length; i++) {
            if (todoContainer.childNodes[i].classList.contains("completedTodo") == true) {
                todoContainer.childNodes[i].style.display = "flex"
                todoContainer.childNodes[i].style.opacity = "100"
            } else {
                todoContainer.childNodes[i].style.display = "none"
            }
        }
    } else if (selectedCategory == "incomplete") {
        for (var i = 0; i < todoContainer.childNodes.length; i++) {
            if (todoContainer.childNodes[i].classList.contains("incompletedTodo") == true) {
                todoContainer.childNodes[i].style.display = "flex"
            } else {
                todoContainer.childNodes[i].style.display = "none"
            }
        }
    } else if (selectedCategory == "all") {
        for (var i = 0; i < todoContainer.childNodes.length; i++) {
                todoContainer.childNodes[i].style.display = "flex"
                todoContainer.childNodes[i].style.opacity = "100"
        }
    }
})

addTodoButton.addEventListener("click", function(event){
    event.preventDefault()
    addTodo()
})


/* function addTodoArr(item){
    const todo = {
        id: Date.now(),
        name: item,
        completed: false
    }

    todos.push(todo)
    window.localStorage.setItem("todos",JSON.stringify(todos))
} */




function addTodo(){
    let addTodoInput = document.getElementById("todoText");
    let addTodoText = document.getElementById("todoText").value;
    if (addTodoText != "") {
        let textContainer = document.createElement("div");
        todoContainer.append(textContainer)
        textContainer.classList.add("todoContentContainer");
        textContainer.classList.add("incompletedTodo");

        let textHeader = document.createElement("p");
        let textAccept = document.createElement("button");
        textAccept.setAttribute("class","acceptButton")
        textAccept.innerText = "✓"
        textAccept.onclick = function() { completeTodo(this) };

        let textDelete = document.createElement("button");
        textDelete.setAttribute("class","deleteButton")
        textDelete.innerText = "X"
        textDelete.onclick = function() { deleteTodo(this) };

        let buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("class","buttonContainer")

        textContainer.append(textHeader)
        textContainer.append(buttonContainer)
        buttonContainer.append(textAccept)
        buttonContainer.append(textDelete)
        textHeader.append(addTodoText)
        //window.localStorage.setItem("todo",addTodoText)
        addTodoInput.value = ""

        /* addTodoArr(addTodoText) */
    } else {
        alert("You don't have anything to do?")
    }
}

function deleteTodo(button){
    button.parentNode.parentNode.remove()
}

function completeTodo(button) {
    button.parentNode.parentNode.classList.add("completedTodo");
    button.parentNode.parentNode.classList.remove("incompletedTodo");
    setTimeout(() => {
        button.parentNode.parentNode.style.display = "none"
    }, 2001);
}
