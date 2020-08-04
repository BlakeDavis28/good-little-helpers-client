import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Tasks from './containers/Tasks/Tasks';
import { Route } from 'react-router-dom';
import { db } from './components/firebase';

class App extends Component {
  componentDidMount() {
    db.ref().on('value', function(snapshot) {
      console.log(snapshot.val());
    }, function (error) {
      console.log('Error: ' + error.code);
    });
  }

  render() {
    return (
      <Layout>
        <Route path="/:taskId?" component={Tasks} />
      </Layout>
    );
  }
}


export default App;
