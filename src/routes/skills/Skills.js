import React, { Component } from 'react';
import './Skills.css'
import Placeholder from './Placeholder';
import skills from '../../json/skillsdata.json';
class Skills extends Component
{
    render()
    {        
        return (
        <div className="wrapper skills">
            <div className='content'>
                <h2>Skills</h2>
                {skills['skills'].map(d=><Placeholder icon={d['icon']} sq={d['sq']} skill={d['skill']}/>)}
            </div>
        </div>
        )
    }
}

export default Skills