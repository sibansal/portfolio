import React,{Component} from "react";
import "./Hero.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dp from '../assets/img/dp.jpg'
library.add(fab)
class Hero extends Component
{
    render()
    {
        return (
        <div className="hero wrapper">
            <img alt="dp" src={dp} className="dp" />
            <h1 className="title">I'm Simran Bansal</h1>
            <h2 className="description">A Software Engineer</h2>
            <div>
                <div className="social">
                    <span title="Github">
                        <a href="https://www.github.com/sibansal" className="social-link">
                            <FontAwesomeIcon icon="fab fa-github"/>
                        </a>
                    </span>
                    <span title="Linkedin">
                        <a href="https://www.linkedin.com/in/sibansal/" className="social-link">
                            <FontAwesomeIcon icon="fab fa-linkedin"/>
                        </a>
                    </span>
                    <span title="Telegram">
                        <a href="https://t.me/sibansal" className="social-link">
                            <FontAwesomeIcon icon="fab fa-telegram"/>
                        </a>
                    </span>
                    <span title="Twitter">
                        <a href="https://www.twitter.com/sibansal" className="social-link">
                            <FontAwesomeIcon icon="fab fa-twitter"/>
                        </a>
                    </span>
                </div>
            </div>
        </div>
        )
    }
}

export default Hero;