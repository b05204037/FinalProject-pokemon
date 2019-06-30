import React from 'react';

export default ({attack}) => {
    return (
        <div className = 'attack-tag'>
            <div className = 'arrow' style = {{visibility: attack.arrow}}>></div>
            <div className = 'attack-name'>{attack.name}</div>
        </div>
    )
}