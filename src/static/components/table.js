import React, { Component } from 'react';

class Table extends Component
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
                {
                    this.props.header.map(item=>(
                        <th>
                           {item}
                        </th>
                        ))
                }
                </tr>
                {
                    this.props.values.map(row=>(
                    <tr>
                        {row.map(item=>(<td>{item}</td>))}
                    </tr>
                    ))
                }
            </table>
        )
    }
}

export default Table;