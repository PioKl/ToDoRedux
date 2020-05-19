import { combineReducers } from "redux";
import tasks from "./task.reducer";
import filters from "./filter.reducer";
import filterByCategory from "./filterByCategory.reducer";

export default combineReducers({
    tasks, filters, filterByCategory,
});