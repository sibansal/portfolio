import React, { Component } from 'react'
import './skills.css'
import data from './../../static/data/skills.json'
import Block from './../../static/components/block'

class Skills extends Component {
    render() {
        return (
            <div className='layout skills'>
                <h2>Skills</h2>
                <div style={{justifyContent: "center"}} className='blockContent' >
                    <div className='blockElement past'>Long ago (&gt; 6 months)</div>
                    <div className='blockElement recent'>Recent</div>
                    <div className='blockElement now'>Active</div>
                </div>

                <div className='content'>
                    {
                        Object.entries(data).map(
                            (([skillset, skills]) => (<Block values={skills} header={skillset} />)
                        ))}
                </div>
            </div>
        )
    }
}

export default Skills;