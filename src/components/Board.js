import React from 'react'
import RowsInBoard from './RowsInBoard'

const Board = ({ rows, cols }) => {
  const rowArr = [...Array(Number.parseInt(rows))]
  return <RowsInBoard rowArr={rowArr} cols={cols} />
}

export default Board
