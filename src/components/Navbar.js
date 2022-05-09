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
                    <li title="Home"><NavLink to="/" className="link"><i class="fas fa-home"></i></NavLink></li>
                    <li title="Projects"><NavLink to="/projects" className="link"><i class="fas fa-building"></i></NavLink></li>
                    <li title="Skills"><NavLink to="/skills" className="link"><i class="fas fa-hammer"></i></NavLink></li>
                    <li title="Contact"><NavLink to="/contact" className="link"><i class="fas fa-phone"></i></NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;