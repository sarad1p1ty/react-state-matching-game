import React from 'react'
import './Board.css';
import Tile from '../Tile'

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }
  let tiles = props.tiles.map((tile) => {
    return <Tile {...tile}/>
  })

  return (
    <div className='Board' style={gridConfig}>
      {tiles}
    </div>
  )
}

export default Board
