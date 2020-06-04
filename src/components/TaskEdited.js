import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { EditContext } from '../contexts/EditContext';
import { saveEditTask } from "../actions/task.actions";
import "../style/TaskEdited.scss";
const Task = ({ task, saveEditTask }) => {
    const { title, description, category, id } = task;
    const { setIsEdited } = useContext(EditContext);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedCategory, setEditedCategory] = useState(category);

    const handleEditedTitle = (e) => {
        setEditedTitle(e.target.value);
    }
    const handleSaveEditedTask = (e) => {
        e.preventDefault();
        //editedTitle ? editedTitle : title - jeśli editedTitle nie jest pusty, czyl użytkownik coś zmienił to użyj nowego tytułu, a jeśli nie to niech dalej będzie używany stary
        saveEditTask(id, editedTitle ? editedTitle : title, editedDescription ? editedDescription : description, editedCategory);
        /* ponizej do rozwiazania z select i options, useState wtedy jest useState=('') */
        /*         saveEditTask(id, editedTitle ? editedTitle : title, editedDescription ? editedDescription : description, editedCategory ? editedCategory : category); */
        setIsEdited(false)
    }

    return (
        <div className="editTaskContainer">
            <form className="editTask" onSubmit={handleSaveEditedTask}>
                <h1 className="editTask__heading">Title</h1>
                <input className="editTask__input editTask__input--title" type="text" placeholder={title} onChange={handleEditedTitle} defaultValue={title} name="" id="" />
                <h1 className="editTask__heading">Description</h1>
                <textarea className="editTask__input editTask__input--description" type="text" maxLength="50" rows="3" placeholder={description} defaultValue={description} onChange={(e) => setEditedDescription(e.target.value)} name="" id="" />
                {/*                 <input type="text" maxLength="50" size="50" placeholder={description} defaultValue={description} onChange={(e) => setEditedDescription(e.target.value)} name="" id="" /> */}
                <h1 className="editTask__heading">Category</h1>
                <div className="editTask__categoriesButtons">
                    <button
                        className={`editTask__categoryButton ${editedCategory === "normal" && "editTask__categoryButton--active"}`}
                        onClick={(e) => { e.preventDefault(); setEditedCategory(e.target.value) }}
                        value="normal" title="Normal">Normal
                    </button>
                    <button
                        className={`editTask__categoryButton ${editedCategory === "shopping" && "editTask__categoryButton--active"}`}
                        onClick={(e) => { e.preventDefault(); setEditedCategory(e.target.value) }}
                        value="shopping" title="Shopping">Shopping</button>
                    <button
                        className={`editTask__categoryButton ${editedCategory === "food" &&
                            "editTask__categoryButton--active"}`}
                        onClick={(e) => { e.preventDefault(); setEditedCategory(e.target.value) }}
                        value="food" title="Food">Food</button>
                    <button
                        className={`editTask__categoryButton ${editedCategory === "training" && "editTask__categoryButton--active"}`}
                        onClick={(e) => { e.preventDefault(); setEditedCategory(e.target.value) }}
                        value="training" title="Training">Training</button>
                </div>

                {/*                 <select defaultValue={category} id="categories">
                    <option onClick={(e) => setEditedCategory(e.target.value)} value="normal" >Normal</option>
                    <option onClick={(e) => setEditedCategory(e.target.value)} value="shopping">Shopping</option>
                    <option onClick={(e) => setEditedCategory(e.target.value)} value="food">Food</option>
                    <option onClick={(e) => setEditedCategory(e.target.value)} value="training">Training</option>
                </select>
                <input className="editTask__save" title="Save" type="submit" value="Save" /> */}
                <button className="editTask__save" title="Save" type="submit" value="Save">Save</button>
            </form>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    saveEditTask: (id, title, description, category) => dispatch(saveEditTask(id, title, description, category))
});


export default connect(null, mapDispatchToProps)(Task);