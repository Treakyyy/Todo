import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.modules.css'

function TodosActions({resetTodos, deleteCompletedTodos, completedTodoExist}){
    return (
        <div className="todosActionsContainer">
        <Button title = "Reset todos" onClick={resetTodos}><RiRefreshLine /></Button>
        <Button title = "Clear complited todos" onClick={deleteCompletedTodos} disabled = {!completedTodoExist}><RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodosActions