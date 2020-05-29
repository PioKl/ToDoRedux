import React, { useState, useContext } from 'react';
import { connect } from "react-redux";
import { addTask } from "../actions/task.actions";
import { EditContext } from '../contexts/EditContext';
import { CreateTaskContext } from '../contexts/CreateTaskContext';

const AddTask = ({ addTask }) => {
    //const normal = "normal";
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState("normal");
    const { isEdited } = useContext(EditContext);
    const { isTaskCreated, setIsTaskCreated } = useContext(CreateTaskContext);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleCreateTask = (e) => {
        setIsTaskCreated(true);
    }
    const handleAddTask = (e) => {
        e.preventDefault();
        if (title !== "") {
            addTask(title, description, category);
            setTitle("");
            setDescription("");
            setIsTaskCreated(false);
        }
    }
    const handleCancel = () => {
        setIsTaskCreated(false);
    }
    return (
        <>
            {isEdited ? null :
                <>
                    {isTaskCreated ? <div>
                        <form onSubmit={handleAddTask}>
                            <input type="text" placeholder="title" value={title} onChange={handleTitle} name="" id="" />
                            <input type="text" maxLength="50" size="50" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} name="" id="" />
                            <select defaultValue="normal" id="categories" /* do chroma zeby dzialalo trzeba tak uzyc onChange={(e) => setCategory(e.target.value)} */>
                                <option onClick={(e) => setCategory(e.target.value)} value="normal">Normal</option>
                                <option onClick={(e) => setCategory(e.target.value)} value="shopping">Shopping</option>
                                <option onClick={(e) => setCategory(e.target.value)} value="food">Food</option>
                                <option onClick={(e) => setCategory(e.target.value)} value="training">Training</option>
                            </select>
                            <input type="submit" value="add task" />
                        </form>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                        :
                        <div>
                            <button onClick={handleCreateTask}>Create New Task</button>
                        </div>}
                </>
            }

        </>
    );
}

const mapDispatchToProps = dispatch => ({
    addTask: (title, description, category) => dispatch(addTask(title, description, category)),
});

export default connect(
    null,
    mapDispatchToProps
)(AddTask);