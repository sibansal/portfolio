import React from 'react';
import ReactDOM from 'react-dom'
import Home from './pages/home/home'
import Skills from './pages/skills/skills'
import './assets/css/style.css'
import TopWork from './pages/topwork/topwork';
import GetConnected from './pages/getconnected/getconnected';
import About from './pages/about/about';
import "./index.css"
import Navbar from './static/components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Skills />
    <TopWork />
    <About />
    <GetConnected />
  </React.StrictMode>
)