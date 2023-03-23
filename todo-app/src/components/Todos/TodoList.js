import Todo from "./Todo";
import styles from "./TodoList.modules.css"

function TodoList({ todos, deleteTodo, toggleTodo }){
    return (
        <div className="todoListContainer">
            {todos.length === 0 && <h2>Todo list is empty</h2>}
           {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodo = {deleteTodo} toggleTodo = {toggleTodo}/>
           ))}
        </div>
    )
}

export default TodoList