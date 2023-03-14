import React,{ Component } from 'react'
import List from '../../static/components/list';
import './topwork.css'
import academicImg from './../../static/svg/academic.svg'
import commercialImg from './../../static/svg/commercial.svg'
import volunteeredImg from './../../static/svg/volunteer.svg'
import data from './../../static/data/topwork.json'

class TopWork extends Component
{
    render()
    {
        return (
            <div className='layout topwork'>
                <h2>Top Work</h2>
                <div className='content'>
                    <List thumbnail={academicImg} title='Academic' values={data.academic} />
                    <List thumbnail={commercialImg} title='Commercial' values={data.commercial} />
                    <List thumbnail={volunteeredImg} title='Volunteered' values={data.volunteered} />
                </div>

            </div>
          )
    }
}

export default TopWork;