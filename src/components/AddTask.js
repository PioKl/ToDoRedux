import React, { useState, useContext } from 'react';
import { connect } from "react-redux";
import { addTask } from "../actions/task.actions";
import { EditContext } from '../contexts/EditContext';
import { CreateTaskContext } from '../contexts/CreateTaskContext';
import "../style/AddTask.scss";

const AddTask = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState("normal");
    const { isEdited } = useContext(EditContext);
    const { isTaskCreated, setIsTaskCreated } = useContext(CreateTaskContext);

    const handleTitle = (e) => {
        setTitle(e.target.value);
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
                    {isTaskCreated ?
                        <div className="newTaskContainer">
                            <form className="addTask" onSubmit={handleAddTask}>
                                <h1 className="addTask__heading">Title</h1>
                                <input className="addTask__input addTask__input--title" type="text" placeholder="title" value={title.slice(0, 20)} onChange={handleTitle} required />
                                <h1 className="addTask__heading">Description</h1>
                                <textarea className="addTask__input addTask__input--description" type="text" maxLength="50" rows="3" placeholder="description" value={description.slice(0, 50)} onChange={(e) => setDescription(e.target.value)} />
                                <h1 className="addTask__heading">Category</h1>
                                <div className="addTask__categoriesButtons">
                                    <button
                                        className={`addTask__categoryButton ${category === "normal" && "addTask__categoryButton--active"}`}
                                        onClick={(e) => { e.preventDefault(); setCategory(e.target.value) }}
                                        value="normal" title="Normal">Normal
                                        </button>
                                    <button
                                        className={`addTask__categoryButton ${category === "shopping" && "addTask__categoryButton--active"}`}
                                        onClick={(e) => { e.preventDefault(); setCategory(e.target.value) }}
                                        value="shopping" title="Shopping">Shopping</button>
                                    <button
                                        className={`addTask__categoryButton ${category === "food" &&
                                            "addTask__categoryButton--active"}`}
                                        onClick={(e) => { e.preventDefault(); setCategory(e.target.value) }}
                                        value="food" title="Food">Food</button>
                                    <button
                                        className={`addTask__categoryButton ${category === "training" && "addTask__categoryButton--active"}`}
                                        onClick={(e) => { e.preventDefault(); setCategory(e.target.value) }}
                                        value="training" title="Training">Training</button>
                                </div>
                                <div className="addTask__finishButtons">
                                    <button className="addTask__finishButton addTask__finishButton--submit" type="submit" title="Add Task">Add Task</button>
                                    <button type="button" className="addTask__finishButton addTask__finishButton--cancel" onClick={handleCancel} title="Cancel">Cancel</button>
                                </div>
                            </form>
                        </div>
                        : null
                    }
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