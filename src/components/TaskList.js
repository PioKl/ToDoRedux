import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
const TaskList = ({ tasks }) => {
    console.log(tasks)
    return (
        <div>
            <ul>
                {tasks.map(task => {
                    return (<Task key={task.id} task={task} />)
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    tasks: state.tasks,
})
export default connect(mapStateToProps)(TaskList);