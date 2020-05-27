
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
                    edited: action.edited,
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
        case "EDIT_TASK":
            //{ ...task, edited: false } zeby zapobiec błędowi podczas odświeżenia w panelu edycji, jeśli odświeżę w trakcie panelu edycji i wejde w edycje kolejnego tasku, to w panelu mogą pojawić się dwa taski do edycji
            return state.map((task) => task.id === action.id ? { ...task, edited: true } : { ...task, edited: false })
        case "SAVE_EDIT_TASK":
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        title: action.title,
                        description: action.description,
                        category: action.category,
                        edited: false,
                    }
                }
                else return task
            })
        default:
            return state;
    }
};
export default tasks;