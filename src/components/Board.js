import React from 'react'
import ColumnsInRow from './ColumnsInRow'
import RowsInBoard from './RowsInBoard'

const Board = ({ rows, cols }) => {
  const colArr = [...Array(Number.parseInt(cols))]
  const columnsInBoard = <ColumnsInRow colArr={colArr} />
  const rowArr = [...Array(Number.parseInt(rows))]
  const rowsInBoard = (
    <RowsInBoard rowArr={rowArr} columnsInBoard={columnsInBoard} />
  )
  return rowsInBoard
}

export default Board
