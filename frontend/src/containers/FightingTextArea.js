import React, { Component } from 'react';

class FightingTextArea extends Component {
    state = {}

    render() {
        this.upperTextLength = (this.props.text.upper.length).toString();
        this.upperStyle = {width: this.upperTextLength+'em',
                            animation: 'typing '+this.upperTextLength*0.1+'s steps('+this.upperTextLength+')',
                           
        }

        this.lowerTextLength = (this.props.text.lower.length).toString();
        this.lowerStyle = {width: this.lowerTextLength+'em',
                            animation: 'typing '+this.lowerTextLength*0.1+'s steps('+this.lowerTextLength+')',
        }

        return ( 
            
            <div className = 'Fighting-Text-Area'>
                <div className = 'text-input fighting-text-input-upper' style = {this.upperStyle}>
                    {this.props.text.upper}
                </div>
                <div className = 'text-input fighting-text-input-lower' style = {this.lowerStyle}>
                    {this.props.text.lower}
                </div>
            </div>
        );
    }
}
 
export default FightingTextArea;