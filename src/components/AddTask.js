import React, { useState, useContext, useEffect } from 'react';
import { connect } from "react-redux";
import { addTask } from "../actions/task.actions";
import { EditContext } from '../contexts/EditContext';
import { CreateTaskContext } from '../contexts/CreateTaskContext';
import "../style/AddTask.scss";

const AddTask = ({ addTask }) => {
    //const normal = "normal";
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState("normal");
    const [scroll, setScroll] = useState(false);
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

    const scrollCheck = () => {
        //console.log(scroll)
        //console.log(window.scrollY)
        const beginScroll = window.scrollY < 80;
        if (beginScroll === false) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollCheck, false);
        return () => {
            window.removeEventListener("scroll", scrollCheck, false);
        };
    });
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
                        <div className="create-newTask">
                            <button title="Create New Task" className={`create-newTask__button ${scroll ? "create-newTask__button--scroll" : "create-newTask__button--standard"}`} onClick={handleCreateTask}>{scroll ? <i className="fas fa-plus create-newTask__button--plusIcon"></i> : "Create New Task"}</button>
                        </div>}
                    {/*                         <div className={scroll ? 'scroll' : null} onClick={() => { window.scrollTo(0, 0) }}>
                                <i className={scroll ? "fas fa-arrow-up scroll__arrowUp" : null}></i>
                            </div> */}
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