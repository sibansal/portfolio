import React,{Component} from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";
import "./Container.css";
class Container extends Component
{
    render()
    {
        return (
            <div className="header">
                <Navbar />
                <Skills />
            </div>
        )
    }
}

export default Container;