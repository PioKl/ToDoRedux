import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { deleteTask, completeTask, editTask } from "../actions/task.actions";
import { EditContext } from '../contexts/EditContext';
import "../style/Task.scss";
const Task = ({ task, deleteTask, completeTask, editTask, saveEditTask }) => {
    const { title, description, category, id, completed } = task;
    const { isEdited, setIsEdited } = useContext(EditContext);
    const handleCheck = () => {
        completeTask(id)
    }
    const handleDelete = () => {
        deleteTask(id)
    }
    const handleEditTask = () => {
        setIsEdited(true);
        editTask(id)
    }

    return (
        <>
            {/* return state.map((task) => task.id === action.id ? { ...task, edited: false } : {...task, edited: false})  isEdited jest po to, zeby nie wyswietlilo pozostalych taskow do edytowania, bo ...task, edited: false spowoduje, ze wyskoczy task do edytowania oraz lista ponizszych, czyli rowniez te, ktorych edytowac nie chcę, isEdited zapobiega temu*/}
            {/* ze zmienionym sposobem mozna isEdited potem usunac */}
            {isEdited ? null : <li className="task__item">
                <span className={`task__circle task__circle--${category} ${completed && "task__circle--completed"}`}></span>
                <div title={`${completed ? "uncomplete task" : "complete task"}`} onClick={handleCheck} className="task__specification">
                    <p className="task__info task__info--title" style={{ textDecoration: completed ? "line-through" : "none" }} /* onClick={handleCheck} */>{title}</p>
                    {description ? <p style={{ textDecoration: completed ? "line-through" : "none" }} className="task__info task__info--description">{description}</p> : null}
                    <p style={{ textDecoration: completed ? "line-through" : "none" }} className="task__info task__info--category">{category}</p>
                </div>
                <div className="task__buttons">
                    <button title="delete task" className="task__button task__button--delete" onClick={handleDelete}></button>
                    <button title="edit task" className="task__button task__button--edit" onClick={handleEditTask}></button>
                </div>

            </li>}
        </>
    );
}
const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch(deleteTask(id)),
    completeTask: (id) => dispatch(completeTask(id)),
    editTask: (id) => dispatch(editTask(id)),
});


export default connect(null, mapDispatchToProps)(Task);