import React, { Component } from 'react';
import "./Placeholder.css"
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ProjectPlaceHolder extends Component
{
    render(){
        return (
        <div className='projectPlaceHolder' style={{"color":this.props.color}}>
            <div className='frontIcon'>
                <FontAwesomeIcon icon={this.props.icon} />
            </div>
            <div>{this.props.title}</div>
            <div>{this.props.projects.length}</div>
            <div className='projects'>
                <ul>
                    {this.props.projects.map(p=><li>{p}</li>)}
                </ul>
            </div>
        </div>
        )
    }
}

ProjectPlaceHolder.defaultProps={
    color:"!inherit",
    icon:faSchool,
    title:"Academic",
    projects:[
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4"
    ]
}

export default ProjectPlaceHolder;