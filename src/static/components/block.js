import React, { Component } from 'react';

class Block extends Component {
    super(props) {
        this.props = props;
    }

    render() {
        let skillset = this.props.values;
        console.log(skillset)
        return (
            <div className='block'>
                <h3 className='blockTitle'>{this.props.header}</h3>
                <div className='blockContent'>
                    {skillset.map(skill =>
                        (<div className={'blockElement '+skill['lastUsed']}>{skill['skill']}</div>)
                    )}
                </div>
            </div>);
    }
}

export default Block;