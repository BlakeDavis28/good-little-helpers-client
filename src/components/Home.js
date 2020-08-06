import React, { Component } from 'react';
import logo from '../images/logo.png';
import banner from '../images/banner.png';


class Home extends Component{
  // constructor(props){
  //   super(props)
  // }

  render(){
    return(

      <div>
      <h1> Good Little Helpers</h1>
      <p> A marketplace for skilled volunteers to find collaborators</p>
      <p> build a better community together </p>
      <img src={logo} id="logo" alt="Logo" />;
      <img src={banner} id="banner" alt="Banner" />;
      </div>

    )
  }
}

export default Home;
