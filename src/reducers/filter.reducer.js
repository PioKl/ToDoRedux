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