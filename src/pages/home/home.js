import React,{ Component } from 'react';
import './home.css'
import logo from './../../assets/img/dp.jpg'
import arrow from './../../assets/img/arrow.svg'
class Home extends Component
{
    render()
    {
        return (
            <div className='layout'>
                <div className='hero'>
                <div><img className='logo' src={logo} alt='Simran Bansal'/></div>
                <div className='intro'>I'm Simran Bansal</div>
                <div className='tagline'>A Software Engineer</div>
                <div><img className='arrow' src={arrow} alt='scroll down'/><br />
                <img className='arrow' src={arrow} alt='scroll down'/></div>
                </div>
            </div>
          )
    }
}

export default Home;