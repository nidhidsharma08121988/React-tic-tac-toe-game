import React, { useState } from 'react'

const Block = ({ colId, rowId, turns, setTurns }) => {
  const [value, setValue] = useState('')
  const [disable, setDisable] = useState(false)
  const handleBlockClick = e => {
    if (turns % 2 === 0) setValue('X')
    else setValue('O')
    setTurns(turns + 1)
    setDisable(true)
  }
  return (
    <button
      className='tic-toc-square'
      id={`${rowId}${colId}`}
      data-testid={`${rowId}${colId}`}
      onClick={handleBlockClick}
      //   disabled={disable}
    >
      {value}
    </button>
  )
}

export default Block
