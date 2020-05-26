import React, { useContext } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import TaskEdited from './TaskEdited';
import { EditContext } from '../contexts/EditContext';
const TaskList = ({ tasks }) => {
    const { isEdited } = useContext(EditContext);
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <div key={task.id}>
                        {/* isEdited jest po to aby zlikwidowac problem pojawienia sie razem panelu zapisu i tasków, wówczas gdy użytkownik będąc w panelu edycji odświeży stronę, a nie wykorzysta opcji zapisz */}
                        {task.edited && isEdited ?
                            <TaskEdited key={task.id} task={task} />
                            :
                            <Task key={task.id} task={task} />}
                    </div>
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
