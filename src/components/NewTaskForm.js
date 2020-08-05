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
        name="First Name"
        id="first name"
        placeholder="John"
        onChange={this.handleChange}
        />
        <label>Last Name</label>
        <input
        name="Last Name"
        type="last name"
        onChange={this.handleChange}
        id="last name"
        placeholder="Doe"
        />
        <label>Date of Birth</label>
        <input
        name="DOB"
        type="date"
        onChange={this.handleChange}
        id="dob"
        />
        <button>Next </button>
      </form>
    )
  }
}

export default NewTaskForm;
