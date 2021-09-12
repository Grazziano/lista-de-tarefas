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

let list = document.createElement('ol');
div.appendChild(list);

let task = document.querySelector("input[type='text'");
task.addEventListener('change', getContent);

function getContent() {
    console.log(task.value);
}