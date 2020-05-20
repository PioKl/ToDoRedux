const searchs = (state = [], action) => {
    switch (action.type) {
        case "SEARCH_TASK":
            return action.title
        default:
            return state;
    }
};
export default searchs;