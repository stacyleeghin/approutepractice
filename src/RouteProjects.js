import React, {Component} from 'react';


class RouteProject extends Component {

    constructor(props){
        super(props)
        this.state = {
            project:[

            ]

        }
    }

    render (){
        return(

            <div className="main">
            <h3>All projects</h3>
            <div className="card project">
              <img class="card-img-top" src="project.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title</p>
                <p>
                  <i class="fas fa-heart"></i>
                  <i class="fas fa-edit"></i>
                  <i class="fas fa-trash"></i>
                </p>
              </div>
            </div>
          </div>
        )
    }
}

export default RouteProject;

