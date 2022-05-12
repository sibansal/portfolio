import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab)
library.add(fas)
class Placeholder extends Component
{
    render()
    {   
        return ( 
            <div className='placeholder' style={
                {
                    "display":"inline-block",
                    "color": this.props.color,
                    "font-size": "3em",
                    "padding": "1em",
                    "background-color": this.props.bgcolor,
                    "min-width": "3em",
                    "width": "3em",
                    "margin":"1vh"
                }
            }>
                <i className={this.props.icon}></i>
                <FontAwesomeIcon icon={this.props.icon} />
                <div style={{"width":"100%","border":"1px solid "+this.props.color, "height":"1vh", "font-size":".5em"}}>
                <div style={{"width":this.props.sq+"%","background-color":this.props.color,"height":"100%","font-size":".5em"}}>
                </div></div>
                <div style={{"font-size":"0.5em"}}>
                    {this.props.sq}%
                </div>
                <div style={{"font-size":"0.4em", "margin-top":"1em"}}>
                    <strong>{this.props.skill}</strong>
                </div>
            </div>
        )
    }
}

Placeholder.defaultProps={
    "icon":"python","sq":"10","color":"#e8e8e8","bgcolor":"#1d1d1d","skill":"python"
}

export default Placeholder