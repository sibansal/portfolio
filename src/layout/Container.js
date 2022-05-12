import React,{Component} from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "../routes/skills/Skills";
import Projects from "../routes/projects/Projects";
import "./Container.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Container extends Component
{
    render()
    {
        return (
            <div className="header">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route index path="/" element={<Hero />}></Route>
                        <Route path="/skills" element={<Skills />}></Route>
                        <Route path="/projects" element={<Projects />}></Route>
                        <Route path="*" element={<Hero />}></Route>
                    </Routes>
                </Router>                
            </div>
        )
    }
}

export default Container;