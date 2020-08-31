import React, {Component} from 'react';

import { Router, Link } from '@reach/router'

import RouteProjects from './RouteProjects';
import RouteAddProject from './RouteAddProject';
import RouteEditProject from './RouteEditProject';


import './App.css';


class App extends Component{

    
  render(){
    return (
      <div className="app">


        <div className="header">
          <span>Welcome</span><i className="fas fa-bars"></i>
          <ul class="menu">
            <li><Link to="projects">All projects</Link></li>
            <li><Link to ="projects/create">Add a project</Link></li>
            <li><a href="">Login</a></li>
            <li><a href="">Signup</a></li>
          </ul>
        </div>

        <Router>
          <RouteProjects path ="projects" />
          <RouteAddProject path ="projects/create" />
          <RouteEditProject path ="projects/:id/edit" />

        </Router>
     
      
      </div>

      
    );
  }
}

export default App;
