import React, { Component } from 'react';
import AttackTag from '../components/AttackTag';

class FightingControlArea extends Component {
    state = { position: {x: 0, y: 0} }

    constructor(porps){
        super();

        document.addEventListener('keydown', e => {
            if(this.props.displayState === 'visible'){
                if(e.keyCode >= 37 && e.keyCode <= 40){
                    if(e.keyCode === 37 || e.keyCode === 39){
                        this.props.moveArrow({x: 1, y: 0});
                    } else{
                        this.props.moveArrow({x: 0, y: 1});
                    }
                }
    
                if(e.keyCode == 13 || e.keyCode == 32){
                    this.props.playerExecuteAttack(this.props.arrowPosition.x+2*this.props.arrowPosition.y);
                }

                if(e.keyCode === 66){
                    this.props.goToPrepare();
                }
            }})
    }

    render() { 
        return ( 
            <div className = 'Fighting-Control-Area' style = {{visibility: this.props.displayState}}>
                <div className = 'attack-table'>
                    <div>
                        <AttackTag attack = {this.props.attack[0]}/>
                        <AttackTag attack = {this.props.attack[1]}/>
                    </div>
                    <div>
                        <AttackTag attack = {this.props.attack[2]}/>
                        <AttackTag attack = {this.props.attack[3]}/>
                    </div>
                </div>
                <div className = 'attack-info'>
                    <div>
                        <span>PP {this.props.attack[this.props.arrowPosition.x+2*this.props.arrowPosition.y].currentPP}/{this.props.attack[this.props.arrowPosition.x+2*this.props.arrowPosition.y].totalPP}</span>
                    </div>
                    <div>
                        <span>Damage {this.props.attack[this.props.arrowPosition.x+2*this.props.arrowPosition.y].damage}</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default FightingControlArea;