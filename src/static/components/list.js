import React, { Component } from 'react';

class List extends Component
{
    super(props)
    {
        this.props=props;
    }
    
    render()
    {
        return (
            <table>
                <tr>
                    <td width={'10%'}><img src={this.props.thumbnail} alt={this.props.title} style={{height:'100%',width:'100%'}}/></td>
                    <td width={'90%'}>
                        <h3 style={{paddingLeft:'1em', textAlign: 'left'}}>{this.props.title}</h3>
                        <div style={{textAlign: 'left'}}>
                            <ul style={{paddingLeft: '2em'}}>
                                {this.props.values.map(item=>(<li>{item}</li>))}
                            </ul>
                        </div>
                    </td>
                </tr>
            </table>
        )
    }
}


export default List;