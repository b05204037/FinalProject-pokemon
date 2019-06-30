import React from 'react'

export default ({roleInfo}) => {
    var lifeBarTotalStyle = {   
        marginTop: '7px',   
        width: '200px',
        height: '8px',
        border: '2px solid black',
        borderRadius: '5px',
        background: 'rgb(220, 226, 226)',
        position: 'relative',
        top: '0px',
        left: '0px',
    }

    var lifeBarCurrentStyle = {
        width: 100*(roleInfo.currentBlood/roleInfo.totalBlood < 0?0:roleInfo.currentBlood/roleInfo.totalBlood).toString()+'%',
        height: '100%',
        background: 'black',
        transition: '0.3s',
    }

    return (
        <div className = 'info-card'>
            <div className = 'char-info'>
                <span style = {{marginLeft: '70px', fontSize: '40px'}}>{roleInfo.name}</span>
                <span style = {{position: 'absolute', right: '30px', top: '15px', fontSize: '25px'}}>   Lv. {roleInfo.level}</span>
            </div>
            <div style = {{display: 'flex', flexDirection: 'row', marginTop: '5px'}}>
                <span style = {{marginLeft: '50px', marginRight: '10px', fontSize: '15px'}}>HP: </span>
                <div className = 'life-bar-total' style = {lifeBarTotalStyle}>
                    <div className = 'life-bar-current' style = {lifeBarCurrentStyle}></div>
                </div>
            </div>
            <div className = 'life-value' style = {{fontSize: '35px', marginLeft: '150px', marginTop: '0px', fontWeight: '1000'}}>{roleInfo.currentBlood>0?roleInfo.currentBlood:0}/{roleInfo.totalBlood}</div>
        </div>
    )
}