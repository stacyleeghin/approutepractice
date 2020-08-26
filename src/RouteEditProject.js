import React, {Component} from 'react';
import {navigate} from '@reach/router'

class RouteEditProject extends Component {

    constructor(props){
        super(props)
        this.state ={
            project:{
                name:'Sunset on Waiheke',
                description:'Painting by a local artist'
            }
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

    }
    render(){

        var {name, description} = this.state.project

        return(
            <div className="main">
                <h3>Edit a project</h3>
                <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                    <div className="form-group">
                        <label htmlFor="name-input">Name</label>
                        <input type="text" className="form-control" name="name-input" id="photo-input" defaultValue={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name-input">Description</label>
                        <input type="text" className="form-control" name="description-input" id="description-input" defaultValue={description}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name-input">Photo</label>
                        <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="type-input">Type</label>
                        <select className="form-control" name="type-input" id="type-input">
                            <option value="1">Painting</option>
                            <option value="2">Sculpture</option>
                            <option value="3">Digital</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Update</button>


                </form>
            </div>

        )
    }
}

export default RouteEditProject;