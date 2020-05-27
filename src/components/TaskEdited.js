import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { EditContext } from '../contexts/EditContext';
import { saveEditTask } from "../actions/task.actions";
const Task = ({ task, saveEditTask }) => {
    const { title, description, category, id } = task;
    const { setIsEdited } = useContext(EditContext);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedCategory, setEditedCategory] = useState('');

    const handleEditedTitle = (e) => {
        setEditedTitle(e.target.value);
    }
    const handleSaveEditedTask = (e) => {
        e.preventDefault();
        //editedTitle ? editedTitle : title - jeśli editedTitle nie jest pusty, czyl użytkownik coś zmienił to użyj nowego tytułu, a jeśli nie to niech dalej będzie używany stary
        saveEditTask(id, editedTitle ? editedTitle : title, editedDescription ? editedDescription : description, editedCategory ? editedCategory : category);
        setIsEdited(false)
    }

    return (
        <div>
            <form onSubmit={handleSaveEditedTask}>
                <input type="text" placeholder={title} onChange={handleEditedTitle} defaultValue={title} name="" id="" />
                <input type="text" maxLength="50" size="50" placeholder={description} defaultValue={description} onChange={(e) => setEditedDescription(e.target.value)} name="" id="" />
                <select defaultValue={category} id="categories">
                    <option onClick={(e) => setEditedCategory(e.target.value)} value="normal" >Normal</option>
                    <option onClick={(e) => setEditedCategory(e.target.value)} value="shopping">Shopping</option>
                    <option onClick={(e) => setEditedCategory(e.target.value)} value="food">Food</option>
                    <option onClick={(e) => setEditedCategory(e.target.value)} value="training">Training</option>
                </select>
                <input type="submit" value="Save" />
            </form>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    saveEditTask: (id, title, description, category) => dispatch(saveEditTask(id, title, description, category))
});


export default connect(null, mapDispatchToProps)(Task);