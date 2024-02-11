import React,{ Component } from 'react';
import './home.css'
import logo from './../../assets/img/dp.png'
import arrow from './../../assets/img/arrow.svg'
import video from './../../static/mp4/hero.mp4'
class Home extends Component
{
    render()
    {
        return (
            <div className='layout'>
                <div className='hero'>
                    <div className='overlay'>
                            <video width='100%' height='100%' autoPlay loop muted>
                                <source src={video} type="video/mp4"/>
                            </video>
                    </div>
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