let body = document.body;

let title = document.createElement('h1');
title.classList.add('title', 'center');
title.innerText = 'Lista de Tarefas';
body.appendChild(title);

let div = document.createElement('div');
div.classList.add('container');
body.appendChild(div);

let inputText = document.createElement('input');
inputText.setAttribute('type', 'text');
div.appendChild(inputText);

let button = document.createElement('button');
button.innerText = 'Salvar';
button.id = 'save';
div.appendChild(button);

button.addEventListener('click', saveContent);

let list = document.createElement('ol');
div.appendChild(list);

let taskList = [];

function saveContent() {
    let task = document.querySelector("input[type='text']").value;
    taskList.push(task);
    localStorage.setItem('taskList', taskList);
    // console.log(localStorage.getItem('taskList'));
}

function getContent() {
    let arr = localStorage.getItem('taskList');
    arr = arr.split(',');
    for (let index = 0; index < arr.length; index += 1) {
        let li = document.createElement('li');
        li.innerText = arr[index];
        list.appendChild(li);
        console.log(arr[index]);
    }
}

getContent();