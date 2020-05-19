import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { showAll, showCompleted, showNotCompleted } from "../actions/filter.actions";
import { showByCategory } from "../actions/filterByCategory.actions"
/* import { Filterss } from "../actions/filter.actions"; */
import { chooseFilter } from "../actions/filter.actions"; //do 2 sposobu
import { AVAILABLE_FILTERS } from '../actions/task.actions' //do 2 sposobu
const Filters = ({ showAll, showCompleted, showNotCompleted, showByCategory, chooseFilter, filters }) => {

    const allCategories = "allCategories";
    const [categoryToFilter, setCategoryToFilter] = useState(allCategories);
    /* 1 sposob */
    const handleAll = (e) => {
        showAll(e.target.value)
        console.log(e.target.value)
    }
    const handleCompleted = (e) => {
        showCompleted(e.target.value)
        console.log(e.target.value)
    }
    const handleNotCompleted = (e) => {
        showNotCompleted(e.target.value)
    }

    const handleCategory = (e) => {
        setCategoryToFilter(e.target.value);
    }

    useEffect(() => {
        showByCategory(categoryToFilter);
    })


    /* 2 sposob */
    /*     const handleChooseFilter = (e) => {
            console.log(e.target.value)
            chooseFilter(e.target.value)
        } */

    return (
        <div>
            {/*             <button value={Filterss.SHOW_ALL} onClick={handleAll}>All</button>
            <button value={Filterss.SHOW_COMPLETED} onClick={handleCompleted}>Completed</button> */}

            {/*1 sposob  */}
            <button value="SHOW_ALL" disabled={filters === "SHOW_ALL" ? true : false} onClick={handleAll}>All</button>
            <button value="SHOW_NOTCOMPLETED" disabled={filters === "SHOW_NOTCOMPLETED" ? true : false} onClick={handleNotCompleted}>Not Completed</button>
            <button value="SHOW_COMPLETED" disabled={filters === "SHOW_COMPLETED" ? true : false} onClick={handleCompleted}>Completed</button>
            <select id="categories">
                <option onClick={handleCategory} defaultValue="selected" value={allCategories}>All Categories</option>
                <option onClick={handleCategory} value="normal">Normal</option>
                <option onClick={handleCategory} value="food">Food</option>
                <option onClick={handleCategory} value="training">Training</option>
            </select>


            {/* <button value="SHOW ALL" onClick={handleChooseFilter}>All</button>
            <button value="SHOW COMPLETED" onClick={handleChooseFilter}>Completed</button> */}

            {/*             <button value={AVAILABLE_FILTERS.SHOW_ALL} onClick={handleChooseFilter}>All</button>
            <button value={AVAILABLE_FILTERS.SHOW_COMPLETE} onClick={handleChooseFilter}>Completed</button> */}

            {/* 2sposob */}
            {/*             <button value={AVAILABLE_FILTERS.SHOW_ALL} onClick={handleChooseFilter}>All</button>
            <button value={AVAILABLE_FILTERS.SHOW_COMPLETED} onClick={handleChooseFilter}>Completed</button>
 */}
        </div>
    );
}

const mapStateToProps = state => ({
    //tasks: state.tasks,
    //filters: state.filters
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    /* 1 sposob */
    showAll: (filter) => dispatch(showAll(filter)),
    showCompleted: (filter) => dispatch(showCompleted(filter)),
    showNotCompleted: (filter) => dispatch(showNotCompleted(filter)),
    showByCategory: (filter) => dispatch(showByCategory(filter)),

    /* chooseFilter: (filter) => dispatch(chooseFilter(filter)) */
    /*     handleChooseFilter: (e) =>
            dispatch({
                type: "FILTER",
                filter: value,
            }) */

    /* 2 sposob */
    /* chooseFilter: (filter) => dispatch(chooseFilter(filter)) */

});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);