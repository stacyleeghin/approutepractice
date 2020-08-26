import React, {Component} from 'react';
import {navigate} from '@reach/router'

class RouteAddProject extends Component{

    constructor (props){
    super(props)
    }
    render(){
        return (
            <div class="main">
                <h3>Add a project</h3>
                <form>
                    <div class="form-group">
                        <label for="name-input">Name</label>
                        <input type="text" class="form-control" name="name-input" id="name-input" placeholder="Enter project name" />
                    </div>
                    <div class="form-group">
                        <label for="name-input">Description</label>
                        <input type="text" class="form-control" name="description-input" id="description-input" placeholder="Enter project description" />
                    </div>

                    <div class="form-group">
                        <label for="name-input">Photo</label>
                        <input type="text" class="form-control" name="photo-input" id="photo-input" value="project.jpg" />
                    </div>

                    <div class="form-group">
                        <label for="type-input">Type</label>
                        <select class="form-control" name="type-input" id="type-input">
                            <option value="1">Painting</option>
                            <option value="2">Sculpture</option>
                            <option value="3">Digital</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </div>

        )
        
    }

    
}
export default RouteAddProject;