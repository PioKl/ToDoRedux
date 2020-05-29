import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { showAll, showCompleted, showNotCompleted } from "../actions/filter.actions";
import { showByCategory } from "../actions/filterByCategory.actions"
import { searchTask } from "../actions/filterSearch.actions"
import { EditContext } from '../contexts/EditContext';
import { CreateTaskContext } from '../contexts/CreateTaskContext';
import "../style/Filters.scss";
const Filters = ({ showAll, showCompleted, showNotCompleted, showByCategory, filters, searchTask }) => {

    //const allCategories = "allCategories";
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
        //console.log(e.currentTarget.getAttribute("value"))
        //setCategoryToFilter(e.target.value);
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
            {/* {isEdited ? null :  */}
            <div className="filters" style={{ display: isEdited || isTaskCreated ? 'none' : 'inline' }}>
                <div className="filters__search-filter">
                    <input className="filters__search-input" type="text" value={search} onChange={handleSearch} />
                </div>
                <div className="filters__showing-filters">
                    <button className="filters__showing-button filters__showing-button--showAll" value="SHOW_ALL" disabled={filters === "SHOW_ALL" ? true : false} onClick={handleAll}>All</button>
                    <button className="filters__showing-button filters__showing-button--showNotCompleted" value="SHOW_NOTCOMPLETED" disabled={filters === "SHOW_NOTCOMPLETED" ? true : false} onClick={handleNotCompleted}>Not Completed</button>
                    <button className="filters__showing-button filters__showing-button--showCompleted" value="SHOW_COMPLETED" disabled={filters === "SHOW_COMPLETED" ? true : false} onClick={handleCompleted}>Completed</button>
                </div>
                {/* <div className="filters__category-filters">
                    <select className="check" defaultValue="allCategories" id="categories">
                        <option onClick={handleCategory} value="allCategories">All Categories</option>
                        <option onClick={handleCategory} value="normal">Normal</option>
                        <option onClick={handleCategory} value="shopping">Shopping</option>
                        <option onClick={handleCategory} value="food">Food</option>
                        <option onClick={handleCategory} value="training">Training</option>
                    </select>
                </div> */}
                <div className="filters__category-filters">
                    <span className="filters__category-title" onClick={handleOpenCategoriesFilter}>Show Categories: {categoryToFilter === "allCategories" ? "All Categories" : categoryToFilter[0].toUpperCase() + categoryToFilter.slice(1)}</span>
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
                {/*                 <div className="filter__selectPanel">
                        <NavLink to="./">
                            <span onClick={this.handleFilterRegion} className={this.state.filterActive ? "filter__chooseRegion filter__chooseRegion--caretUp" : "filter__chooseRegion filter__chooseRegion--caretDown"}>{this.state.regionChoosed ? this.state.optionUpper : "Filter by Region"}</span>
                            <ul className={this.state.filterActive ? "filter__dropdown visible" : "filter__dropdown"}>
                                <li className="filter__dropdown-item filter__dropdown-item--all" value="all"
                                    onClick={this.handleChangeRegion}>All</li>
                                <li className="filter__dropdown-item filter__dropdown-item--africa" value="africa"
                                    onClick={this.handleChangeRegion}>Africa</li>
                                <li className="filter__dropdown-item filter__dropdown-item--americas" value="americas"
                                    onClick={this.handleChangeRegion}>Americas</li>
                                <li className="filter__dropdown-item filter__dropdown-item--asia" value="asia"
                                    onClick={this.handleChangeRegion}>Asia</li>
                                <li className="filter__dropdown-item filter__dropdown-item--europe" value="europe"
                                    onClick={this.handleChangeRegion}>Europe</li>
                                <li className="filter__dropdown-item filter__dropdown-item--oceania" value="oceania"
                                    onClick={this.handleChangeRegion}>Oceania</li>
                            </ul>
                        </NavLink>
                    </div> */}
            </div>{/* } */}

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