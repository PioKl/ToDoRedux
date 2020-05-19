let nextTask = 0;

export const addTask = (title, description, category) => ({
    type: "ADD_TASK",
    id: nextTask++,
    title: title,
    description: description,
    category: category,
    completed: false,
})

export const deleteTask = (id) => ({
    type: "REMOVE_TASK",
    id,
})

export const completeTask = (id) => ({
    type: "COMPLETE_TASK",
    id,
})


//do 2 sposobu
export const AVAILABLE_FILTERS = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_NOTCOMPLETED: "SHOW_NOTCOMPLETED",
}

/* export const searchTask = (title) => ({
    type: "SEARCH_TASK",
    title,
}) */