import React from 'react';
import TaskCard from "./TaskCard/TaskCard"
import Grid from '@material-ui/core/Grid'

const TasksLeft = ({ tasks, visible, width }) => {
    const taskCards = tasks.map(task => <TaskCard key={task.id} task={task} />)
    const display = visible ? {} : { display: 'none' }

    return (<Grid item xs={width} className="i-scroll tlc-width" style={display} >{taskCards}</Grid> );
}

export default TasksLeft;
