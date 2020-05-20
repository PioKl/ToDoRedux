export const showAll = (filter) => ({
    type: "SHOW_ALL",
    filter: filter,
})

export const showCompleted = (filter) => ({
    type: "SHOW_COMPLETED",
    filter: filter,
})

export const showNotCompleted = (filter) => ({
    type: "SHOW_NOTCOMPLETED",
    filter: filter,
})
