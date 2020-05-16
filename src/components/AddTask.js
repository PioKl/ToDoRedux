import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addTask } from "../actions/task.actions";

import { searchTask } from "../actions/task.actions";

const AddTask = ({ addTask, searchTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [search, setSearch] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleAddTask = (e) => {
        e.preventDefault();
        addTask(title, description);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        console.log("Dziala", search)
        searchTask(search)
    })
    return (
        <div>
            <input type="text" value={search} onChange={handleSearch} />
            <form onSubmit={handleAddTask}>
                <input type="text" placeholder="title" value={title} onChange={handleTitle} name="" id="" required />
                <input type="text" maxLength="50" size="50" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} name="" id="" />
                <input type="submit" value="add task" />
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addTask: (title, description) => dispatch(addTask(title, description)),
    searchTask: (search) => dispatch(searchTask(search))
});

export default connect(
    null,
    mapDispatchToProps
)(AddTask);