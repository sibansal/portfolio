import React,{Component} from "react";
import "./Hero.css";
class Hero extends Component
{
    render()
    {
        return (
        <div className="hero wrapper">
            <img alt="dp" src="./img/dp.jpg" className="dp" />
            <h1 className="title">I'm Simran Bansal</h1>
            <h2 className="description">A Software Engineer</h2>
            <div>
                <div className="social">
                    <span title="Github"><a href="https://www.github.com/sibansal" className="social-link"><i className="fab fa-github"></i></a></span>
                    <span title="Linkedin"><a href="https://www.linkedin.com/in/sibansal/" className="social-link"><i className="fab fa-linkedin"></i></a></span>
                    <span title="Telegram"><a href="https://t.me/sibansal" className="social-link"><i className="fab fa-telegram"></i></a></span>
                    <span title="Twitter"><a href="https://www.twitter.com/sibansal" className="social-link"><i className="fab fa-twitter"></i></a></span>
                </div>
            </div>
        </div>
        )
    }
}

export default Hero;