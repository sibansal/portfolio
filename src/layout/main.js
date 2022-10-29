import React,{ Component } from 'react';
import './main.css'
class Main extends Component
{
    render()
    {
        return (
            <div className='layout'>
                <h2 className='title'>{this.props.title}</h2>
                <hr className='title-hr' />
                <div className='content'>
                    {this.props.content}
                </div>
            </div>
          )
    }
}
Main.defaultProps={
    title: 'Test',
    content: 'Test Content'
}
export default Main;