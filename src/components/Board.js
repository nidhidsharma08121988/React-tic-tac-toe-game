import React, { useState } from 'react'
import RowsInBoard from './RowsInBoard'

const Board = ({ rows, cols }) => {
  const [turns, setTurns] = useState(0)
  const rowArr = [...Array(Number.parseInt(rows))]
  return (
    <RowsInBoard
      rowArr={rowArr}
      cols={cols}
      turns={turns}
      setTurns={setTurns}
    />
  )
}

export default Board
