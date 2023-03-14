import React,{ Component } from 'react'
import './skills.css'
import data from './../../static/data/skills.json'
import Table from './../../static/components/table'

class Skills extends Component
{
    render()
    {
        return (
            <div className='layout skills'>
                <h2>Skills</h2>
                <div className='content'>
                    <Table values={data['utility']} header={["Utility", "Quotient (%)"]}></Table>
                    <Table values={data['tool']} header={["Tool", "Quotient (%)"]}></Table>
                    <Table values={data['framework']} header={["Framework", "Quotient (%)"]}></Table>
                    <Table values={data['language']} header={["Language", "Quotient (%)"]}></Table>
                </div>
            </div>
          )
    }
}

export default Skills;