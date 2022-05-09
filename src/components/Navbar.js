import React,{Component} from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
class Navbar extends Component
{
    render()
    {
        return (
            <nav className="navbar navbar-main">
                <ul className="nav">
                    <li><NavLink to="/" className="link">Home</NavLink></li>
                    <li><NavLink to="/skills" className="link">Skills</NavLink></li>
                    <li><NavLink to="/projects" className="link">Projects</NavLink></li>
                    {/* <li>
                        <a target="_new"
                        href="https://tawk.to/chat/6276e858b0d10b6f3e7119cd/1g2g7n7op" className="link">Contact</a>
                    </li> */}
                </ul>
            </nav>
        )
    }
}

export default Navbar;