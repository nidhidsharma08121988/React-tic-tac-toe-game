import React from 'react'
import Block from './Block'

const ColumnsInRow = ({ colArr: columns, rowId, setRestartGame }) => {
  return columns.map((item, index) => (
    <li key={`C${index + 1}`}>
      <Block
        index={index}
        rowId={rowId}
        colId={`C${index + 1}`}
        setRestartGame={setRestartGame}
      />
    </li>
  ))
}

export default ColumnsInRow
