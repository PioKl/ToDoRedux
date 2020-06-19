import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { showAll, showCompleted, showNotCompleted } from "../actions/filter.actions";
import { showByCategory } from "../actions/filterByCategory.actions"
import { searchTask } from "../actions/filterSearch.actions"
import { EditContext } from '../contexts/EditContext';
import { CreateTaskContext } from '../contexts/CreateTaskContext';
import "../style/Filters.scss";
const Filters = ({ showAll, showCompleted, showNotCompleted, showByCategory, filters, searchTask }) => {

    const [categoryToFilter, setCategoryToFilter] = useState("allCategories");
    const [search, setSearch] = useState('')
    const { isEdited } = useContext(EditContext);
    const { isTaskCreated } = useContext(CreateTaskContext);
    const [showCategoryFilters, setShowCategoryFilters] = useState(false);

    const handleAll = (e) => {
        showAll(e.target.value)
    }
    const handleCompleted = (e) => {
        showCompleted(e.target.value)
    }
    const handleNotCompleted = (e) => {
        showNotCompleted(e.target.value)
    }

    const handleOpenCategoriesFilter = () => {
        setShowCategoryFilters(!showCategoryFilters)
    }

    const handleCategory = (e) => {
        setCategoryToFilter(e.currentTarget.getAttribute("value"));
        setShowCategoryFilters(false);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        showByCategory(categoryToFilter);
        searchTask(search);
    })

    return (
        <>
            <div className="filters" style={{ display: isEdited || isTaskCreated ? 'none' : 'inline' }}>
                <div className="filters__search-filter">
                    <i className="filters__search-icon fas fa-search"></i>
                    <input className="filters__search-input" type="text" value={search} onChange={handleSearch} />
                </div>
                <div className="filters__showing-filters">
                    <button className="filters__showing-button filters__showing-button--showAll" value="SHOW_ALL" disabled={filters === "SHOW_ALL" ? true : false} onClick={handleAll}>All</button>
                    <button className="filters__showing-button filters__showing-button--showNotCompleted" value="SHOW_NOTCOMPLETED" disabled={filters === "SHOW_NOTCOMPLETED" ? true : false} onClick={handleNotCompleted}>Not Completed</button>
                    <button className="filters__showing-button filters__showing-button--showCompleted" value="SHOW_COMPLETED" disabled={filters === "SHOW_COMPLETED" ? true : false} onClick={handleCompleted}>Completed</button>
                </div>

                <div className="filters__category-filters">
                    <button className={`filters__category-title ${showCategoryFilters ? "filters__category-title--active" : "filters__category-title--inActive"}`} onClick={handleOpenCategoriesFilter}>Show Categories: {categoryToFilter === "allCategories" ? "All Categories" : categoryToFilter[0].toUpperCase() + categoryToFilter.slice(1)}</button>
                    <ul style={{ display: showCategoryFilters ? 'flex' : 'none' }} className="filters__category-list">
                        <li onClick={handleCategory} className={`filters__category-item filters__category-item--allCategories
                        ${categoryToFilter === "allCategories" ? "active" : "non-active"}`} value="allCategories">All Categories</li>
                        <li onClick={handleCategory} className={`filters__category-item filters__category-item--normal 
                        ${categoryToFilter === "normal" ? "active" : "non-active"}`} value="normal">Normal</li>
                        <li onClick={handleCategory} className={`filters__category-item filters__category-item--shopping 
                        ${categoryToFilter === "shopping" ? "active" : "non-active"}`} value="shopping">Shopping</li>
                        <li onClick={handleCategory} className={`filters__category-item filters__category-item--food
                        ${categoryToFilter === "food" ? "active" : "non-active"}`} value="food">Food</li>
                        <li onClick={handleCategory} className={`filters__category-item filters__category-item--training 
                        ${categoryToFilter === "training" ? "active" : "non-active"}`} value="training">Training</li>
                    </ul>
                </div>
            </div>

        </>
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