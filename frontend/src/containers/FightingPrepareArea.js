import React, { Component } from 'react';

class FightingPrepareArea extends Component {
    state = {  }

    constructor(props){
        super(props);

        document.addEventListener('keydown', e => {
            if(this.props.displayState === 'visible'){
                if(e.keyCode === 32|| e.keyCode === 13){
                    if(this.props.prepareArrow === 0){
                        this.props.goToFight();
                    } else if(this.props.prepareArrow === 1){
                        this.props.skipClass();
                    }
                } else if(e.keyCode === 37 || e.keyCode === 39){
                    this.props.movePrepareArrow(38-e.keyCode);
                }
            }
        })
    }

    arrowStyle = [{visibility: 'visible'}, {visibility: 'hidden'}, {visibility: 'hidden'}];

    render() { 
        return ( 
            this.props.displayState==="visible"&&<div className = 'FightingPrepareArea' style = {{visibility: this.props.displayState}}>
                <div style = {{display: 'flex', flexDirection: 'row', fontSize: '60px'}}>
                    <div style = {{margin: 'auto'}}>
                        <span style = {this.arrowStyle[(this.props.prepareArrow+0)%3]}>></span>
                        <span>戰鬥</span>
                    </div>
                    <div style = {{margin: 'auto'}}>
                        <span style = {this.arrowStyle[(this.props.prepareArrow+1)%3]}>></span>
                        <span>背包</span>
                    </div>
                    <div style = {{margin: 'auto'}}>
                        <span style = {this.arrowStyle[(this.props.prepareArrow+2)%3]}>></span>
                        <span>翹課</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default FightingPrepareArea;