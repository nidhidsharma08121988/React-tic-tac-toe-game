import React, { useState } from 'react'
import RowsInBoard from './RowsInBoard'

const Board = ({ rows, cols }) => {
  const [turns, setTurns] = useState(0)
  const rowArr = [...Array(Number.parseInt(rows))]
  const rowsInBoard = (
    <RowsInBoard
      rowArr={rowArr}
      cols={cols}
      turns={turns}
      setTurns={setTurns}
    />
  )
  return rowsInBoard
}

export default Board
