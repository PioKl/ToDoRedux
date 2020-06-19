import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { deleteTask, completeTask, editTask } from "../actions/task.actions";
import { EditContext } from '../contexts/EditContext';
import "../style/Task.scss";
const Task = ({ task, deleteTask, completeTask, editTask }) => {
    const { title, description, category, id, completed } = task;
    const { setIsEdited } = useContext(EditContext);
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
            <li className="task__item">
                <span className={`task__circle task__circle--${category} ${completed && "task__circle--completed"}`}></span>
                <span className={`task__checked ${completed ? "task__checked--complete" : "task__checked--notComplete"}`}></span>
                <div title={`${completed ? "uncomplete task" : "complete task"}`} onClick={handleCheck} className="task__specification">
                    <p className="task__info task__info--title" style={{ textDecoration: completed ? "line-through" : "none" }} >{title}</p>
                    {description ? <p style={{ textDecoration: completed ? "line-through" : "none" }} className="task__info task__info--description">{description}</p> : null}
                    <p style={{ textDecoration: completed ? "line-through" : "none" }} className="task__info task__info--category">{category}</p>
                </div>
                <div className="task__buttons">
                    <button title="delete task" className="task__button task__button--delete" onClick={handleDelete}></button>
                    <button title="edit task" className="task__button task__button--edit" onClick={handleEditTask}></button>
                </div>
            </li>
        </>
    );
}
const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch(deleteTask(id)),
    completeTask: (id) => dispatch(completeTask(id)),
    editTask: (id) => dispatch(editTask(id)),
});


export default connect(null, mapDispatchToProps)(Task);