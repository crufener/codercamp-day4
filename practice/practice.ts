function getList() {
    let todoList = [];
    let todos = window.localStorage.getItem('todos');
    todoList.push(todos);

}
