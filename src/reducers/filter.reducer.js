

/* 1 sposob */
const filters = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "SHOW_ALL":
            return action.filter
        case "SHOW_COMPLETED":
            return action.filter
        case "SHOW_NOTCOMPLETED":
            return action.filter
        default:
            return state
    }
}

export default filters

/* const filters = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "SHOW_ALL":
            return action.filter
        case "SHOW_COMPLETED":
            return action.filter
        case "SHOW_NOTCOMPLETED":
            return action.filter
        case "SHOW_BYCATEGORY":
            return action.filter;
        default:
            return state
    }
}

export default filters */


/* 2 sposob */
/* const filters = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "FILTER":
            return action.filter
        default:
            return state
    }
}
export default filters */