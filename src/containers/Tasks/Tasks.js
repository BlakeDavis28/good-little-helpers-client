import React, { Component } from 'react';
import TasksLeft from '../../components/TasksLeft/TasksLeft';
import TasksRight from '../../components/TasksRight/TasksRight';
import Grid from '@material-ui/core/Grid'
import { TASK_STATUS } from '../../utils/constants';
import MediaQuery from 'react-responsive';
import { db } from '../../components/firebase';

const getStatus = (status) => {
    switch (status) {
        case 0: return TASK_STATUS.OPEN;
        case 1: return TASK_STATUS.ASSIGNED;
        default: return TASK_STATUS.COMPLETED
    }
}

class Tasks extends Component {
    constructor() {
      super()
      this.state = {
          selectedTask: null,
          tasks: Array(8).fill(0).map( (_, i) => ({
              id: '' + i,
              title: `Task ${i}`,
              description: `I am task ${i}`,
              status: "Completed" }))
      }
    }

    componentDidMount() {
      db.ref().on('value', (snapshot) => {
        console.log(snapshot.val());
        const taskArray = [];//Object.values(snapshot.val())
        const allTasks = snapshot.val().tasks
        for (const t in allTasks) {
          console.log(t)
          taskArray.push(allTasks[t])
        }
        this.setState({
          tasks: taskArray
        })
      }, function (error) {
        console.log('Error: ' + error.code);
      });
    }

    componentDidUpdate(prevProps){
           const { taskId: previousId } = prevProps.match.params;
           const { taskId } = this.props.match.params;

           if (previousId !== taskId){

               let selectedTask = null;

               if (taskId) {
                   selectedTask = this.state.tasks[taskId]
               }

               this.setState({ selectedTask })
           }
       }

       render() {
               const { tasks, selectedTask} = this.state;

               return ( <Grid container spacing={16} justify="center">
                           <MediaQuery maxWidth={880}>
                               {(matches) =>{
                                   let leftVisible =  true;
                                   let rightVisible = true;
                                   let leftWidth = 3;
                                   let rightWidth = 5;

                                   if (matches) {
                                       rightVisible = selectedTask !== null;
                                       leftVisible = !rightVisible;
                                       leftWidth = 6;
                                       rightWidth = 10;
                                   }

                                   return  <>
                                       <TasksLeft tasks={tasks} visible={leftVisible} width={leftWidth}/>
                                       <TasksRight task={selectedTask} visible={rightVisible} width={rightWidth}/>
                                   </>
                               } }
                           </MediaQuery>
                       </Grid>);
           }}

       export default Tasks;
