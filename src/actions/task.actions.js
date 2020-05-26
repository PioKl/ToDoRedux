import uuid from "uuid/dist/v1";
//let nextTask = 0;

export const addTask = (title, description, category) => ({
    type: "ADD_TASK",
    //id: nextTask++,
    id: uuid(),
    title: title,
    description: description,
    category: category,
    completed: false,
    edited: false,
})

export const deleteTask = (id) => ({
    type: "REMOVE_TASK",
    id,
})

export const completeTask = (id) => ({
    type: "COMPLETE_TASK",
    id,
})

export const editTask = (id) => ({
    type: "EDIT_TASK",
    id,
})

export const saveEditTask = (id, editedTitle) => ({
    type: "SAVE_EDIT_TASK",
    id,
    title: editedTitle,
})
