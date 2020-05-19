import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from "../actions/task.actions";
import { completeTask } from "../actions/task.actions";
const Task = ({ task, deleteTask, completeTask }) => {
    const { title, description, category, id, completed } = task;

    const handleCheck = () => {
        completeTask(id)
    }
    const handleDelete = () => {
        deleteTask(id)
    }
    return (
        <div>
            <li style={{ textDecoration: completed ? "line-through" : "none" }} onClick={handleCheck}>{title}</li>
            <p>{description}</p>
            <p>{category}</p>
            <button onClick={handleDelete}>X</button>
        </div>

    );
}
const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch(deleteTask(id)),
    completeTask: (id) => dispatch(completeTask(id))
});

export default connect(null, mapDispatchToProps)(Task);

//export default Task;