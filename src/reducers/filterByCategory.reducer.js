const filterByCategory = (state = [], action) => {
    switch (action.type) {
        case "SHOW_BYCATEGORY":
            return action.filter;
        default:
            return state
    }
}

export default filterByCategory