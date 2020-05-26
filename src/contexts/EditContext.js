import React, { createContext, useState } from 'react';

export const EditContext = createContext();

const EditContextProvider = (props) => {
    const [isEdited, setIsEdited] = useState(false)


    return (
        <EditContext.Provider value={{ isEdited, setIsEdited }}>
            {props.children}
        </EditContext.Provider>
    )
}

export default EditContextProvider;