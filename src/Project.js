import React, {Component} from 'react'
import {Link} from '@reach/router'

class Project extends Component {
    
    handleTrashClick = () => {

    }
    
    render(){

        var {name,description,id} = this.props

        return(

            <div className="main">
      
            <div className="card project">
              <img class="card-img-top" src="project.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title</p>
                <p>
                  <i class="fas fa-heart"></i>
                  <Link to={'/projects/'+id+'edit'}><i class="fas fa-edit"></i></Link>
                  <i onClick={this.handleTrashClick} class="fas fa-trash"></i>
                </p>
              </div>
            </div>
          </div>

        );

    }
}
export default Project;