import React, { Component } from 'react';
import fire, { db, currentUser } from '../components/firebase';

class NewTaskForm extends Component{
  constructor(){
    super()
    this.state = {
      "First Name" : '',
      "Last Name" : '',
      "DOB" : null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(event){
    event.preventDefault();
    const user = await currentUser();
    console.log(user)
    if (user){
      db
        .collection("users")
        .doc(user.uid)
        .update({
          ...this.state
        })
      }
      console.log(user, this.state);
  };

  handleChange(event){
    this.setState({[event.target.name] : event.target.value});
  }

  render(){
    return(
      <form class="newtask0" onSubmit={this.onSubmit}>
        <label>First Name</label>
        <input
        type="text"
        name="Title"
        id="title"
        placeholder="Task Title"
        onChange={this.handleChange}
        />
        <br />
        <label>Description</label>
        <input
        name="Task Description"
        type="text"
        onChange={this.handleChange}
        id="taskdescription"
        placeholder="what is your task about?"
        />
                <br />
        <label>Location</label>
        <input
        name="Location"
        type="text"
        onChange={this.handleChange}
        id="tasklocation"
        placeholder="Task Location"
        />
                <br />
        <label>Task Status</label>
        <input
        name="Task Status"
        type="text"
        onChange={this.handleChange}
        id="taskstatus"
        placeholder="pending"
        />
                <br />
        <label>Date Posted</label>
        <input
        name="Date Posted"
        type="date"
        onChange={this.handleChange}
        id="dateposted"
        />
        <button> Submit Task </button>
      </form>
    )
  }
}

export default NewTaskForm;
