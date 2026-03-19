
const todoKey = "reactTodo"
export const setLocalStorage = (task) => {
    localStorage.setItem(todoKey, JSON.stringify(task));
}
export const getLocalStorage = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if(!rawTodos) return [];
    //String->Object
    return JSON.parse(rawTodos);
}