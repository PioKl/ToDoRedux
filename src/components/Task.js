import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { deleteTask, completeTask, editTask } from "../actions/task.actions";
import { EditContext } from '../contexts/EditContext';
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
            {isEdited ? null : <div>
                <li style={{ textDecoration: completed ? "line-through" : "none" }} onClick={handleCheck}>{title}</li>
                <p>{description}</p>
                <p>{category}</p>
                <button onClick={handleDelete}>X</button>
                <button onClick={handleEditTask}>Edit</button>
            </div>}
        </>
    );
}
const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch(deleteTask(id)),
    completeTask: (id) => dispatch(completeTask(id)),
    editTask: (id) => dispatch(editTask(id)),
});


export default connect(null, mapDispatchToProps)(Task);