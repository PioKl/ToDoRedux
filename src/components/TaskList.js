import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { AVAILABLE_FILTERS } from '../actions/task.actions'; //do 2 sposobu
const TaskList = ({ tasks, filters, filterByCategory }) => {
    console.log(filters)
    console.log(tasks)
    console.log(filterByCategory)
    return (
        <div>
            <ul>
                {/*                 {filters === "SHOW_ALL" ? tasks.map(task => {
                    return (<Task key={task.id} task={task} />)
                }) : tasks.map(task => {
                    if (task.completed === true) {
                        return <Task key={task.id} task={task} />
                    } else {
                        return null
                    }
                })} */}
                {/*                 {tasks.map(task => {
                    return (<Task key={task.id} task={task} />)
                })} */}
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}

            </ul>
        </div>
    );
}

/* 1 sposob */
const filterTodos = (tasks, filters, filterByCategory) => {
    console.log(filters)
    if (filters === "SHOW_ALL") {
        //console.log(filters)
        //return tasks.filter(task => task);
        if (filterByCategory === "normal") {
            return tasks.filter(task => task.category === "normal" && task.title.includes("a"))
        }
        else if (filterByCategory === "food") {
            return tasks.filter(task => task.category === "food")
        }
        else if (filterByCategory === "training") {
            return tasks.filter(task => task.category === "training")
        }
        else {
            return tasks.filter(task => task);
        }
    }
    else if (filters === "SHOW_NOTCOMPLETED") {
        if (filterByCategory === "allCategories") {
            return tasks.filter(task => task.completed === false)
        }
        else if (filterByCategory === "normal") {
            return tasks.filter(task => task.completed === false && task.category === "normal")
        }
        else if (filterByCategory === "food") {
            return tasks.filter(task => task.completed === false && task.category === "food")
        }
        else if (filterByCategory === "training") {
            return tasks.filter(task => task.completed === false && task.category === "training")
        }
        //return tasks.filter(task => task.completed === false);
    }

    else if (filters === "SHOW_COMPLETED") {
        //return tasks.filter(task => task.completed === true);
        if (filterByCategory === "allCategories") {
            return tasks.filter(task => task.completed === true)
        }
        else if (filterByCategory === "normal") {
            return tasks.filter(task => task.completed === true && task.category === "normal")
        }
        else if (filterByCategory === "food") {
            return tasks.filter(task => task.completed === true && task.category === "food")
        }
        else if (filterByCategory === "training") {
            return tasks.filter(task => task.completed === true && task.category === "training")
        }
    }
}

/* 1 sposob alternatywa z AVAILABLE_FILTERS*/
/* const filterTodos = (tasks, filters) => {
    if (filters === AVAILABLE_FILTERS.SHOW_ALL) {
        console.log(filters)
        return tasks.filter(task => task);
    }
    else if (filters === AVAILABLE_FILTERS.SHOW_NOTCOMPLETED) {
        return tasks.filter(task => task.completed === false);
    }

    else if (filters === AVAILABLE_FILTERS.SHOW_COMPLETED) {
        return tasks.filter(task => task.completed === true);
    }
}
 */

/* 2 sposob */
/* const filterTodos = (tasks, filters) => {
    switch (filters) {
        case AVAILABLE_FILTERS.SHOW_ALL:
            return tasks.filter(task => task.completed === false);
        case AVAILABLE_FILTERS.SHOW_COMPLETED:
            return tasks.filter(task => task.completed === true);
        default:
            return tasks
    }

} */

const mapStateToProps = state => ({
    //tasks: state.tasks,
    //filters: state.filters
    filterByCategory: state.filterByCategory,
    tasks: filterTodos(state.tasks, state.filters, state.filterByCategory)
})
export default connect(mapStateToProps)(TaskList);

/* newCountriesList = actualCountriesList.filter(country => { //filtrowanie, jeśli jakiś kraj zawiera wpisaną frazę to go zwróć, toLowerCase() jest zastosowane, żeby porównywany kraj i wartość z inputa miały małe litery, żeby nie wystąpił konflikt
                return country.name.toLowerCase().includes(e.target.value.toLocaleLowerCase());
            }) */