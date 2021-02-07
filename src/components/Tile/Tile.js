import React from 'react'

import './Tile.css'

const Tile = (props) => {
    let dynamicColor = props.selected === true || props.matched === true ?
        { backgroundColor: props.color } : null;

    return (
        <div className='Tile' style={dynamicColor}>
            { props.selected === true || props.matched === true ?
    <svg /> : null };
        </div>
    )
}

export default Tile
