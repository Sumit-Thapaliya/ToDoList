const works = document.querySelector(".lists");
const todo = document.querySelector(".work");
const btn1 = document.querySelector("#submit");
const div2= document.querySelector(".div2");
let todos = JSON.parse(localStorage.getItem('todos')) || [];

works.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        btn1.click();
    }
});

if (todos.length === 0) {
    todo.textContent = 'No work pending!!!';
} else {
    todos.forEach(item => addTodo(item));
}


function addTodo(text) {
    const li = document.createElement("p");
    li.textContent = text;

    li.style.border = '2px solid white';
    li.style.backgroundColor = '#918e8eff';
    li.style.borderRadius = '20px';
    li.style.display = 'flex';
    li.style.justifyContent = 'center';
    li.style.alignItems = 'center';
    li.style.padding = '10px';
    li.style.color = 'white';

    const del = document.createElement("button");
    del.textContent = "Delete";

    del.style.border = '2px solid white';
    del.style.marginLeft = '10px';
    del.style.cursor = 'pointer';
    del.style.borderRadius = '10px';
    del.style.backgroundColor = '#6ad083ff';
    del.style.color = 'black';
    del.style.padding = '5px';
    del.style.height = '40px';

    del.onclick = () => {
        li.remove();
        todos = todos.filter(t => t !== text);
        localStorage.setItem('todos', JSON.stringify(todos));

        if (todos.length === 0) {
            todo.textContent = 'No work pending!!!';
        }
    };

    li.appendChild(del);
    todo.appendChild(li);
}

btn1.addEventListener("click", function () {
    const list = works.value.trim();
    if (list === '') return;

    if (todo.textContent === 'No work pending!!!') {
        todo.textContent = '';
    }

    addTodo(list);
    todos.push(list);
    localStorage.setItem('todos', JSON.stringify(todos));
    works.value = '';
});

const bulb = document.querySelector(".bulb");
let isDark = false;

const defaultBg = 'white';
const darkBg = '#b0b0caff';
const lightbg='#efe3e3ff';

bulb.addEventListener("click", () => {
    isDark = !isDark;
document.body.style.background = isDark ? 'black' : defaultBg;
div2.style.background = isDark ? darkBg : lightbg;
div2.style.transition = 'background 0.5s ease';
document.body.style.transition = 'background 0.8s ease';
});
