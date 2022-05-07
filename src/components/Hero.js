import React,{Component} from "react";
import "./Hero.css";
class Hero extends Component
{
    render()
    {
        return (
        <div className="hero wrapper">
            <img alt="dp" src="./img/dp.jpg" className="dp" />
            <h1 className="title">I'm Simran Singh Bansal</h1>
            <h2 className="description">A web developer</h2>
            <div>
                <div className="social">
                    <span><a href="https://www.linkedin.com/in/simransinghbansal/" className="social-link"><i className="fab fa-linkedin"></i></a></span>
                    <span><a href="https://www.github.com/simransinghbansal" className="social-link"><i className="fab fa-github"></i></a></span>
                </div>
            </div>
        </div>
        )
    }
}

export default Hero;