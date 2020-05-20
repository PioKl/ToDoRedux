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
    if (filters === "SHOW_ALL") {
        if (filterByCategory === "normal") {
            return tasks.filter(task => task.category === "normal" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "shooping") {
            return tasks.filter(task => task.category === "shooping" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "food") {
            return tasks.filter(task => task.category === "food" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "training") {
            return tasks.filter(task => task.category === "training" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else {
            return tasks.filter(task => task && task.title.toLowerCase().includes(searchs.toLowerCase()));
        }
    }
    else if (filters === "SHOW_NOTCOMPLETED") {
        if (filterByCategory === "allCategories") {
            return tasks.filter(task => task.completed === false && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "normal") {
            return tasks.filter(task => task.completed === false && task.category === "normal" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "shooping") {
            return tasks.filter(task => task.completed === false && task.category === "shooping" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "food") {
            return tasks.filter(task => task.completed === false && task.category === "food" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "training") {
            return tasks.filter(task => task.completed === false && task.category === "training" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
    }

    else if (filters === "SHOW_COMPLETED") {
        if (filterByCategory === "allCategories") {
            return tasks.filter(task => task.completed === true && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "normal") {
            return tasks.filter(task => task.completed === true && task.category === "normal" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "shooping") {
            return tasks.filter(task => task.completed === true && task.category === "shooping" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "food") {
            return tasks.filter(task => task.completed === true && task.category === "food" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
        else if (filterByCategory === "training") {
            return tasks.filter(task => task.completed === true && task.category === "training" && task.title.toLowerCase().includes(searchs.toLowerCase()))
        }
    }
}


const mapStateToProps = state => ({
    tasks: filterTasks(state.tasks, state.filters, state.filterByCategory, state.searchs)
})
export default connect(mapStateToProps)(TaskList);
