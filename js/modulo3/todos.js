var listElements = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
    'Todo 1',
    'Todo 2',
    'Aprender JS'
]

function renderTodos() {
    listElements.innerHTML = ""
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText)

        var position = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+position+')')

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElements.appendChild(todoElement);
    }
}

renderTodos()

function addTodo() {
    var todoText = inputElement.value
    if (todoText) {
        todos.push(todoText);
    }
    else {
        alert('Texto em branco');
    }
    
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo

function deleteTodo(position) {
    todos.splice(position,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos',JSON.stringify(todos))    ;

}