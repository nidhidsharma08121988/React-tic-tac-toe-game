import React, { useContext } from 'react'
import RowsInBoard from './RowsInBoard'
import { GameContext } from './../store/GameState'
const Board = ({ rows, cols }) => {
  const { outcome } = useContext(GameContext)
  const rowArr = [...Array(Number.parseInt(rows))]

  return (
    <div className='game-board'>
      <div className='board'>
        <RowsInBoard rowArr={rowArr} cols={cols} />
      </div>
      <div className='outcome'>{outcome}</div>
    </div>
  )
}

export default Board
