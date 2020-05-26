import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { EditContext } from '../contexts/EditContext';
import { saveEditTask } from "../actions/task.actions";
const Task = ({ task, saveEditTask }) => {
    const { title, description, category, id } = task;
    const { setIsEdited } = useContext(EditContext);
    const [editedTitle, setEditedTitle] = useState('');

    const handleEditedTitle = (e) => {
        setEditedTitle(e.target.value);
    }
    const handleSaveEditedTask = (e) => {
        e.preventDefault();
        //editedTitle ? editedTitle : title - jeśli editedTitle nie jest pusty, czyl użytkownik coś zmienił to użyj nowego tytułu, a jeśli nie to niech dalej będzie używany stary
        saveEditTask(id, editedTitle ? editedTitle : title);
        setIsEdited(false)
    }

    return (
        <div>
            <form onSubmit={handleSaveEditedTask}>
                <input type="text" placeholder={title} onChange={handleEditedTitle} defaultValue={title} name="" id="" />
                <input type="submit" value="Save" />
            </form>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    saveEditTask: (id, title) => dispatch(saveEditTask(id, title))
});


export default connect(null, mapDispatchToProps)(Task);