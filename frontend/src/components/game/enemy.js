import React, { Component } from 'react'
import ric from '../../img/RicMini.png'
import ricLeft from '../../img/RicMiniLeft.png'
import ricRight from '../../img/RicMiniRight.png'

class enemy extends Component {
    ricImg = [ric, ricRight, ricLeft]

    render() {
        var style = {
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            position: "absolute",
            top: (this.props.enemy.position.top).toString()+"px",
            left: (this.props.enemy.position.left).toString()+"px",
            textAlign: "center",
        }
        return (
            <div style = {style}>
                <img src={this.ricImg[this.props.enemy.facing]} style={{width:"70px", height:"70px", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}></img>
            </div>
        )
    }
}


export default enemy
