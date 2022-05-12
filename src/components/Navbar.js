import React,{Component} from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { faBuilding, faEnvelope, faHammer, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Navbar extends Component
{
    render()
    {
        return (
            <nav className="navbar navbar-main">
                <ul className="nav">
                    <li title="Home">
                        <NavLink to="/" className="link">
                            <FontAwesomeIcon icon={faHome} />
                        </NavLink>
                    </li>
                    <li title="Projects">
                        <NavLink to="/projects" className="link">
                            <FontAwesomeIcon icon={faBuilding} />
                        </NavLink>
                    </li>
                    <li title="Skills">
                        <NavLink to="/skills" className="link">
                            <FontAwesomeIcon icon={faHammer} />
                        </NavLink>
                    </li>
                    <li title="Contact">
                        <a href="mailto:queries@sibansal.dev" className="link">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;