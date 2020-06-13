import React, { useContext } from 'react';
import '../style/Footer.scss';
import { CreateTaskContext } from '../contexts/CreateTaskContext';
import { EditContext } from '../contexts/EditContext';
const Footer = () => {
    const { isTaskCreated, setIsTaskCreated } = useContext(CreateTaskContext);
    const { isEdited } = useContext(EditContext);
    const handleCreateTask = () => {
        setIsTaskCreated(true);
    }
    return (
        <>
            {(isTaskCreated || isEdited) ? null
                :
                <footer className="footer">
                    <div className="create-newTask" onClick={handleCreateTask}>
                        <button title="Create New Task" className="create-newTask__button"><i className="fas fa-plus create-newTask__button--plusIcon"></i></button>
                    </div>
                </footer>}
        </>
    );
}

export default Footer;