import React, { Component } from 'react';
import './Skills.css'
import Placeholder from './Placeholder';
import skills from '../json/skillsdata.json';
class Skills extends Component
{
    render()
    {        
        return (
        <div className="wrapper skills">
            <h2>Skills</h2>
            <div className='content'>
                {skills['skills'].map(d=><Placeholder icon={d['skill']} sq={d['sq']}/>)}
            </div>
        </div>
        )
    }
}

export default Skills