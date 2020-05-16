let nextTask = 0;

export const addTask = (title, description) => ({
    type: "ADD_TASK",
    id: nextTask++,
    title: title,
    description: description,
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

export const searchTask = (title) => ({
    type: "SEARCH_TASK",
    title,
})