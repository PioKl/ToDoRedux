import React, { useState, useContext } from 'react';
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
    /* const [scroll, setScroll] = useState(false); */
    const { isEdited } = useContext(EditContext);
    const { isTaskCreated, setIsTaskCreated } = useContext(CreateTaskContext);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    /*     const handleCreateTask = (e) => {
            setIsTaskCreated(true);
        } */
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

    /*     const scrollCheck = () => {
            //console.log(scroll)
            //console.log(window.scrollY)
            //niepotrzebne z rozwiązaniem "scroll inside"
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
        }); */
    return (
        <>
            {isEdited ? null :
                <>
                    {isTaskCreated ?
                        <div className="newTaskContainer">
                            <form className="addTask" onSubmit={handleAddTask}>
                                <h1 className="addTask__heading">Title</h1>
                                <input className="addTask__input addTask__input--title" type="text" placeholder="title" value={title} onChange={handleTitle} required name="" id="" />
                                <h1 className="addTask__heading">Description</h1>
                                <textarea className="addTask__input addTask__input--description" type="text" maxLength="50" rows="3" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} name="" id="" />
                                {/*                                 <input className="addTask__input addTask__input--description" type="text" maxLength="50" size="50" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} name="" id="" /> */}
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
                                {/*                                 <select defaultValue="normal" id="categories" // do chroma zeby dzialalo trzeba tak uzyc onChange={(e) => setCategory(e.target.value)} //>
                                    <option onClick={(e) => setCategory(e.target.value)} value="normal">Normal</option>
                                    <option onClick={(e) => setCategory(e.target.value)} value="shopping">Shopping</option>
                                    <option onClick={(e) => setCategory(e.target.value)} value="food">Food</option>
                                    <option onClick={(e) => setCategory(e.target.value)} value="training">Training</option>
                                </select> */}
                                <div className="addTask__finishButtons">
                                    <button className="addTask__finishButton addTask__finishButton--submit" type="submit" title="Add Task">Add Task</button>
                                    {/* <input className="addTask__input addTask__input--submit" type="submit" value="add task" /> */}
                                    <button className="addTask__finishButton addTask__finishButton--cancel" onClick={handleCancel} title="Cancel">Cancel</button>
                                </div>
                            </form>
                        </div>
                        :
/*                         <div className="create-newTask">
                            <button title="Create New Task" className="create-newTask__button create-newTask__button--scroll" onClick={handleCreateTask}><i className="fas fa-plus create-newTask__button--plusIcon"></i></button>
                        </div> */ null
                        /*                         <div className="create-newTask">
                                                    <button title="Create New Task" className={`create-newTask__button ${scroll ? "create-newTask__button--scroll" : "create-newTask__button--standard"}`} onClick={handleCreateTask}>{scroll ? <i className="fas fa-plus create-newTask__button--plusIcon"></i> : "Create New Task"}</button>
                                                </div> */
                    }
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