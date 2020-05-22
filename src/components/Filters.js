import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { showAll, showCompleted, showNotCompleted } from "../actions/filter.actions";
import { showByCategory } from "../actions/filterByCategory.actions"
import { searchTask } from "../actions/filterSearch.actions"
const Filters = ({ showAll, showCompleted, showNotCompleted, showByCategory, filters, searchTask }) => {

    const allCategories = "allCategories";
    const [categoryToFilter, setCategoryToFilter] = useState(allCategories);
    const [search, setSearch] = useState('')

    const handleAll = (e) => {
        showAll(e.target.value)
    }
    const handleCompleted = (e) => {
        showCompleted(e.target.value)
    }
    const handleNotCompleted = (e) => {
        showNotCompleted(e.target.value)
    }

    const handleCategory = (e) => {
        setCategoryToFilter(e.target.value);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        showByCategory(categoryToFilter);
        searchTask(search);
    })

    return (
        <div>
            <input type="text" value={search} onChange={handleSearch} />
            <button value="SHOW_ALL" disabled={filters === "SHOW_ALL" ? true : false} onClick={handleAll}>All</button>
            <button value="SHOW_NOTCOMPLETED" disabled={filters === "SHOW_NOTCOMPLETED" ? true : false} onClick={handleNotCompleted}>Not Completed</button>
            <button value="SHOW_COMPLETED" disabled={filters === "SHOW_COMPLETED" ? true : false} onClick={handleCompleted}>Completed</button>
            <select id="categories">
                <option onClick={handleCategory} defaultValue="selected" value={allCategories}>All Categories</option>
                <option onClick={handleCategory} value="normal">Normal</option>
                <option onClick={handleCategory} value="shopping">Shopping</option>
                <option onClick={handleCategory} value="food">Food</option>
                <option onClick={handleCategory} value="training">Training</option>
            </select>
        </div>
    );
}

const mapStateToProps = state => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    showAll: (filter) => dispatch(showAll(filter)),
    showCompleted: (filter) => dispatch(showCompleted(filter)),
    showNotCompleted: (filter) => dispatch(showNotCompleted(filter)),
    showByCategory: (filter) => dispatch(showByCategory(filter)),
    searchTask: (searchedTitle) => dispatch(searchTask(searchedTitle)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);