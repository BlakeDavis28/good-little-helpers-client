import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Tasks from './containers/Tasks/Tasks';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom';
import { db } from './components/firebase';

class App extends Component {
  // componentDidMount() {
  //   db.ref().on('value', function(snapshot) {
  //     console.log(snapshot.val());
  //   }, function (error) {
  //     console.log('Error: ' + error.code);
  //   });
  // }

  render() {
    return (
      <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/:taskId?" component={Tasks} />
      </Switch>
      </Layout>
    );
  }
}


export default App;
