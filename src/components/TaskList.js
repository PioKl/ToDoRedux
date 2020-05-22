import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
const TaskList = ({ tasks }) => {
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}

            </ul>
        </div>
    );
}

const filterTasks = (tasks, filters, filterByCategory, searchs) => {
    switch (filters) {
        case "SHOW_ALL":
            switch (filterByCategory) {
                case "allCategories":
                    return tasks.filter(task => task && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "normal":
                    return tasks.filter(task => task.category === "normal" && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "shopping":
                    return tasks.filter(task => task.category === "shopping" && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "food":
                    return tasks.filter(task => task.category === "food" && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "training":
                    return tasks.filter(task => task.category === "training" && task.title.toLowerCase().includes(searchs.toLowerCase()));
                default: return tasks;
            }
        case "SHOW_NOTCOMPLETED":
            switch (filterByCategory) {
                case "allCategories":
                    return tasks.filter(task => task.completed === false && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "normal":
                    return tasks.filter(task => task.completed === false && task.category === "normal" && task.title.toLowerCase().includes(searchs.toLowerCase()))
                case "shopping":
                    return tasks.filter(task => task.completed === false && task.category === "shopping" && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "food":
                    return tasks.filter(task => task.completed === false && task.category === "food" && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "training":
                    return tasks.filter(task => task.completed === false && task.category === "training" && task.title.toLowerCase().includes(searchs.toLowerCase()))
                default:
                    return tasks;
            }
        case "SHOW_COMPLETED":
            switch (filterByCategory) {
                case "allCategories":
                    return tasks.filter(task => task.completed === true && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "normal":
                    return tasks.filter(task => task.completed === true && task.category === "normal" && task.title.toLowerCase().includes(searchs.toLowerCase()))
                case "shopping":
                    return tasks.filter(task => task.completed === true && task.category === "shopping" && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "food":
                    return tasks.filter(task => task.completed === true && task.category === "food" && task.title.toLowerCase().includes(searchs.toLowerCase()));
                case "training":
                    return tasks.filter(task => task.completed === true && task.category === "training" && task.title.toLowerCase().includes(searchs.toLowerCase()));
                default:
                    return tasks;
            }
        default:
            return tasks
    }
}


const mapStateToProps = state => ({
    tasks: filterTasks(state.tasks, state.filters, state.filterByCategory, state.searchs)
})
export default connect(mapStateToProps)(TaskList);
