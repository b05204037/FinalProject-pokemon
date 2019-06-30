import React, { Component } from 'react'
import MiniMapView from '../../components/game/miniMapView'


class miniMap extends Component {
    render() {
        var isSelected = this.props.isSelected?{
            background:"black",
            color: "white",
        }:{};
        return(
            <div style={{...this.props.style, ...isSelected}}>
                <p>地圖</p>
                {this.props.isSelected&&this.props.openDetail?<MiniMapView />:null}
            </div>
        )
    }
}
export default miniMap