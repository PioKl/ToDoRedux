import React, { useState } from 'react';
import { connect } from "react-redux";
import { addTask } from "../actions/task.actions";

const AddTask = ({ addTask, searchTask }) => {
    const normal = "normal";
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(normal);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleAddTask = (e) => {
        e.preventDefault();
        if (title !== "") {
            addTask(title, description, category);
            setTitle("");
            setDescription("");
        }
    }
    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input type="text" placeholder="title" value={title} onChange={handleTitle} name="" id="" />
                <input type="text" maxLength="50" size="50" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} name="" id="" />
                <select id="categories">
                    <option defaultValue="selected" onClick={(e) => setCategory(e.target.value)} value={normal}>Normal</option>
                    <option onClick={(e) => setCategory(e.target.value)} value="shooping">Shooping</option>
                    <option onClick={(e) => setCategory(e.target.value)} value="food">Food</option>
                    <option onClick={(e) => setCategory(e.target.value)} value="training">Training</option>
                </select>
                <input type="submit" value="add task" />
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addTask: (title, description, category) => dispatch(addTask(title, description, category)),
});

export default connect(
    null,
    mapDispatchToProps
)(AddTask);