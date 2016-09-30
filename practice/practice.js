function getList() {
    var todoList = [];
    var todos = window.localStorage.getItem('todos');
    todoList.push(todos);
}
