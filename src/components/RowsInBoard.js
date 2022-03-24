import React from 'react'

const RowsInBoard = ({ rowArr, columnsInBoard }) => {
  return rowArr.map((item, index) => (
    <div key={`R${index + 1}`}>{columnsInBoard}</div>
  ))
}

export default RowsInBoard
