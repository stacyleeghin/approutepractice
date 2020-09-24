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
    }
  }
  componentDidMount(){
    API.getTypes().then(res => this.setState({types:res.data}))

  }

    
  render(){
    var {types} = this.state
    return (
      <div className="app">
        <div className="header">
          <span>Welcome</span><i className="fas fa-bars"></i>
          <ul class="menu">
            <li><Link to="projects">All projects</Link></li>
            {
              types.map(type => <li><Link to={'/types/'+type.id}>{type.name}</Link></li>)
            }
            <li><Link to ="projects/create">Add a project</Link></li>
            <li><a href="">Login</a></li>
            <li><Link to= "/users/autheticate">Login</Link></li>
            <li><Link to= "/users/create">Sign up</Link></li>
         
          </ul>
        </div>

        <Router>
          <RouteProjects path ="projects" />
          <RouteAddProject path ="projects/create" />
          <RouteEditProject path ="projects/:id/edit" />
          <RouteSingleType path ="/types/:id"/>
          <RouteAddUser path="/users/create" />
          <RouteLogin path="/users/autheticate" />

        </Router>
     
      
      </div>

      
    );
  }
}

export default App;
