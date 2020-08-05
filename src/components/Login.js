import React, { Component } from 'react';
import Firebase from '../components/firebase';
import { Link, Route } from "react-router-dom";
import faker from 'faker';


class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      password: 'chicken',
      email: faker.internet.email(),
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.login(this.state.email, this.state.password)
  }


  render(){
    return(
      <div>
      <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email address"
          onChange={this.handleChange}
          value={this.state.email}
          />
          <input
          name="password"
          type="password"
          onChange={this.handleChange}
          id="password"
          placeholder="enter password"
          value={this.state.password}
          />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
