import React from 'react'
import Block from './Block'

const ColumnsInRow = ({ colArr: columns, rowId, turns, setTurns }) => {
  return columns.map((item, index) => (
    <li key={`C${index + 1}`}>
      <Block
        index={index}
        rowId={rowId}
        colId={`C${index + 1}`}
        turns={turns}
        setTurns={setTurns}
      />
    </li>
  ))
}

export default ColumnsInRow
