import React,{Component} from "react";
import "./Navbar.css";
class Navbar extends Component
{
    render()
    {
        return (
            <nav className="navbar navbar-main">
                <ul className="nav">
                    <li><a href="#" className="link">Home</a></li>
                    <li><a href="#" className="link">Skills</a></li>
                    <li><a href="#" className="link">Projects</a></li>
                    <li><a href="#" className="link">About</a></li>
                    <li><a href="#" className="link">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;