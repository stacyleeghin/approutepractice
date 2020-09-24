import React, {Component} from 'react';

import { Router, Link } from '@reach/router'

import RouteProjects from './RouteProjects';
import RouteAddProject from './RouteAddProject';
import RouteEditProject from './RouteEditProject';
import RouteSingleType from './RouteSingleType';
import RouteAddUser from './RouteAddUser';
import RouteLogin from './RouteLogin'


import './App.css';
import API from './API';


class App extends Component{

  constructor(props){
    super(props)
    this.state ={
      types:[],
      currentUser: null
    }
  }

  setCurrentUser = (user) =>{
    this.setState({currentUser:user})
  }
  componentDidMount(){
    API.getTypes().then(res => this.setState({types:res.data}))

    //local storage
    var userId = localStorage.getItem ('userId')
    if (userId){
      API.getSingleUser(userId).then (res => this. setState({currentUser:res.data}))
    }

  }

    
  render(){
    var {types, currentUser} = this.state
    return (
      <div className="app">
        <div className="header">
          {
            currentUser? (<span>Welcome {currentUser.name}</span>):null
          }
        <i className="fas fa-bars"></i>
  
          <ul class="menu">
            <li><Link to="projects">All projects</Link></li>
            {
              types.map(type => <li><Link to={'/types/'+type.id}>{type.name}</Link></li>)
            }
            {
              currentUser ? (
                <>
                <li><Link to="projects/create">Add a project</Link></li>
                <li><a href= "#">Logout</a></li>
                </>

              ):(
                <>
                <li><Link to= "/users/autheticate">Login</Link></li>
                <li><Link to= "/users/create">Sign up</Link></li>
                </>
              )
            }
          </ul>

        </div>

        <Router>
          <RouteProjects path ="projects" />
          {currentUser ? <RouteAddProject path ="projects/create" /> :null}
          {currentUser ?<RouteEditProject path ="projects/:id/edit" /> :null}
          <RouteSingleType path ="/types/:id"/>
          <RouteAddUser path="/users/create" />
          <RouteLogin setCurrentUser={this.setCurrentUser} path="/users/autheticate" />

        </Router>
     
      
      </div>

      
    );
  }
}

export default App;
