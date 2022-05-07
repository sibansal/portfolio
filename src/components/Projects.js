import React, { Component } from 'react';
import ProjectPlaceHolder from './ProjectPlaceHolder';
import './Projects.css'
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
                                "AI Based Temprature Prediction System",
                                "OCR Supported Image Hosting Service",
                                "AES Supported Image Encrytion Service",
                                "JAVA Based Memory Game"
                            ]
                            } />
                        <ProjectPlaceHolder color="#111166" title="Commercial" icon="fas fa-building" quanitity="3" projects={
                            [
                                "Mock UP Generator for book store",
                                "Cost calculation mechanism for game store",
                                "Payment gateway renovate for an leading NGO",
                            ]
                            } />
                        <ProjectPlaceHolder color="#661111" title="Volunteered" icon="fas fa-hand-holding-heart" quanitity="4" projects={
                            [
                                "Security mechanism design for Indian Academic Origins App",
                                "Data annotation for redical analysis research",
                                "Website developement for an educational institution"
                            ]
                            } />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Projects