const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = input.value;
    
    if(todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerHTML = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
        });

        todos.appendChild(todoEl);
        input.value = "";
    }
});