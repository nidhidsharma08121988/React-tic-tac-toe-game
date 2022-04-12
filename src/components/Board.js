import React, { useContext, useState } from 'react'
import RowsInBoard from './RowsInBoard'
import StartAgain from './StartAgain'
import { GameContext } from './../store/GameState'

const Board = ({ rows, cols }) => {
  const { outcome } = useContext(GameContext)
  const rowArr = [...Array(Number.parseInt(rows))]
  const [restartGame, setRestartGame] = useState(false)

  return (
    <div className='game-board'>
      <div className='board'>
        <RowsInBoard
          rowArr={rowArr}
          cols={cols}
          setRestartGame={setRestartGame}
        />
      </div>

      <div className='outcome'>{outcome}</div>
      <div className='restart'>
        <StartAgain restartGame={restartGame} setRestartGame={setRestartGame} />
      </div>
    </div>
  )
}

export default Board
