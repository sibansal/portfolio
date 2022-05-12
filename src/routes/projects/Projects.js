import React, { Component } from 'react';
import ProjectPlaceHolder from './Placeholder';
import './Projects.css'
import { faBuilding, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
class Projects extends Component
{
    render() {
        return (
            <div className="wrapper projects">
                <div className='content'>
                    <h2>Projects</h2>
                    <div className='container'>
                        <ProjectPlaceHolder color="#116611" quanitity="4" projects={
                            [
                                "AI based temperature prediction simulation deployed on Linode.",
                                "Cloud based image hosting service deployed on Digital Ocean Droplet.",
                                "AES based image encrytion service deployed using jsp servlet on tomcat server.",
                                "Card matching memory game developed in java using swing components."
                            ]
                            } />
                        <ProjectPlaceHolder color="#111166" title="Commercial" icon={faBuilding} quanitity="3" projects={
                            [
                                "Mock UP Generator for book store.",
                                "Components based cost calculation system for game store.",
                                "Payment gateway enhancement for a leading NGO.",
                            ]
                            } />
                        <ProjectPlaceHolder color="#661111" title="Volunteered" icon={faHandHoldingHeart} quanitity="4" projects={
                            [
                                "CAPTCHA based validation mechanism development for Indian Academic Origins App.",
                                "Data annotation for redical posts analysis research.",
                                "Website developement for an educational institution."
                            ]
                            } />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Projects