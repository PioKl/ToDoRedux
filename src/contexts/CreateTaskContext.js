import React, { createContext, useState } from 'react';

export const CreateTaskContext = createContext();

const CreateTaskContextProvider = (props) => {
    const [isTaskCreated, setIsTaskCreated] = useState(false)


    return (
        <CreateTaskContext.Provider value={{ isTaskCreated, setIsTaskCreated }}>
            {props.children}
        </CreateTaskContext.Provider>
    )
}

export default CreateTaskContextProvider;