document.getElementById('add-button').addEventListener('click', function() {
    var todoInput = document.getElementById('todo-input');
    var todoText = todoInput.value;

    if (todoText === '') {
        alert('Please enter a to-do');
        return;
    }

    var todoList = document.getElementById('todo-list');
    var todoItem = document.createElement('li');

    var todoTextNode = document.createTextNode(todoText);
    var trashIcon = document.createElement('span');
    trashIcon.innerHTML = '🗑️';
    trashIcon.className = 'trash-icon';

    todoItem.appendChild(todoTextNode);
    todoItem.appendChild(trashIcon);

    todoList.appendChild(todoItem);
    todoInput.value = '';

    todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
    });

    trashIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        todoList.removeChild(todoItem);
    });
});
