import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import Tasks from './containers/Tasks/Tasks';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'
import NewTaskForm from './components/NewTaskForm';
import Profile from './components/Profile';
import { Route, Switch, withRouter } from 'react-router-dom';
import fire, { db, currentUser } from './components/firebase';


  class App extends Component {
  constructor() {
    super()
    this.state ={
      user: {}
    }
    this.login = this.login.bind(this)
  }

  async componentDidMount() {
    const fetchedUser = await currentUser()
    this.setState({
      user: fetchedUser
    })
  }

  login(email, password){
      fire.auth().signInWithEmailAndPassword(email, password).then((user) =>{
        console.log(user);
      this.props.history.push('/tasks')
      }).catch((err)=>{
        console.log(err)
      })
    }

  async signup(email, password){
    await fire.auth().createUserWithEmailAndPassword(email, password)

    // grabs user id / sends to the database // ref for writing to DB

    // const user = await currentUser();
    // if (user){
    //   db
    //     .collection("users")
    //     .doc(user.uid)
    //     .set({
    //       email: user.email,
    //     })
    //   }
    }

  render() {
    return (
      <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={() => <Login login={this.login}/>} />
        <Route exact path="/signup" component={() => <Signup signup={this.signup}/>} />
        <Route exact path="/newtaskform" component={NewTaskForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/:taskId?" component={Tasks} />
        <Route exact path="/tasks" component={Tasks} />
      </Switch>
      </Layout>

    );
  }
}


export default withRouter(App);
