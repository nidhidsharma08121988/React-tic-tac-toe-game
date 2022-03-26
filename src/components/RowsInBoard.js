import React from 'react'
import ColumnsInRow from './ColumnsInRow'

const RowsInBoard = ({ rowArr, cols, turns, setTurns }) => {
  const colArr = [...Array(Number.parseInt(cols))]
  return rowArr.map((item, index) => (
    <ul key={`R${index + 1}`}>
      <ColumnsInRow
        colArr={colArr}
        rowId={`R${index + 1}`}
        turns={turns}
        setTurns={setTurns}
      />
    </ul>
  ))
}

export default RowsInBoard
