import React, {Component} from 'react'
import {Link} from '@reach/router'
import API from './API'

class Project extends Component {
    
    handleTrashClick = () => {
      var {id,loadProjects} = this.props
      API.deleteProject(id)
      loadProjects()

    }
    
    render(){

        var {name,description,id} = this.props

        return(
      
            <div className="card project">
              <img class="card-img-top" src="project.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
                <p>
                  <i class="fas fa-heart"></i>
                  <Link to={'/projects/'+id+'edit'}><i class="fas fa-edit"></i></Link>
                  <i onClick={this.handleTrashClick} class="fas fa-trash"></i>
                </p>
              </div>
            </div>

        );

    }
}
export default Project;