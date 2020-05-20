
const tasks = (state = [], action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    category: action.category,
                    completed: action.completed,
                }
            ];
        case "REMOVE_TASK":
            return state.filter(task => task.id !== action.id)
        case "COMPLETE_TASK":
            return state.map(task => {
                return {
                    /*id: task.id,
                     title: task.title,
                     description: task.description, */
                    ...task, //wszystko co znajduje sie w obiekcie zamiast przepisywac jak powyzej
                    completed: task.id === action.id ? !task.completed : task.completed
                }
            })
        default:
            return state;
    }
};
export default tasks;