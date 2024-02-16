import React,{ Component } from 'react'
import List from '../../static/components/list';
import './topwork.css'
import data from './../../static/data/topwork.json'

const academicImg = '/svg/academic.svg'
const commercialImg = '/svg/commercial.svg'
const volunteeredImg = '/svg/volunteer.svg'

class TopWork extends Component
{
    render()
    {
        return (
            <div className='layout topwork' id='work'>
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