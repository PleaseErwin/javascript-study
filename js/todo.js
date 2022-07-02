const todoForm = document.querySelector("#todo-add");
const todoInput = document.querySelector("#todo-add input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const DELETE_LINE_CLASSNAME = "delete_line";

let todos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    todoList.removeChild(li);// li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodo();
}

function handleMouseEnter(e) {
    const text = e.target.parentElement.children[1];
    text.classList.add(DELETE_LINE_CLASSNAME);
}

function handleMouseLeave(e) {
    const text = e.target.parentElement.children[1];
    text.classList.remove(DELETE_LINE_CLASSNAME);
}

function addTodo(newTodo) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    button.innerText = "X";
    span.innerText = newTodo.text;

    button.addEventListener("click", deleteTodo);
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    li.appendChild(button);
    li.appendChild(span);

    li.id = newTodo.id;

    todoList.appendChild(li);// 화면에 todo 그리기
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        id:Date.now(),
        text:newTodo
    }
    todos.push(newTodoObj);// array에 Object 추가
    addTodo(newTodoObj);
    saveTodo();
    todoInput.value = "";// input 비우기
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(addTodo);// array에 있는 각각의 item마다 function 실행 - 화면에 그리기
}