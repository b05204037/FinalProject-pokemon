import React, { Component } from 'react';

class FightingTextArea extends Component {
    state = {}
    render() {
        this.upperTextLength = (this.props.text.upper.length).toString();
        this.upperStyle = {width: this.upperTextLength+'em',
                            animation: 'typing '+this.upperTextLength*0.1+'s steps('+this.upperTextLength+')',
                            visibility: this.props.displayState
        }

        this.lowerTextLength = (this.props.text.lower.length).toString();
        this.lowerStyle = {width: this.lowerTextLength+'em',
                            animation: 'typing '+this.lowerTextLength*0.1+'s steps('+this.lowerTextLength+')',
                            animationDelay:  this.upperTextLength*0.1+'s',
                            visibility: this.props.displayState
        }
        return ( 
            this.props.displayState&&
            <div style={style}>
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


var style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "980px",
    height: "200px",
    border: "10px solid rgb(176, 178, 180)",
    backgroundColor: "rgb(244, 246, 248)",
    bottom:"0px",
    left:"50%",
    transform:"translateX(-50%)",
}

 
export default FightingTextArea;