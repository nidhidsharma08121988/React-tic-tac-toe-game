import React, { useContext, useState } from 'react'
import { GameContext } from '../store/GameState'

const Block = ({ colId, rowId, turns, setTurns }) => {
  const { boardState, setBoardState } = useContext(GameContext)
  const [value, setValue] = useState('')
  const [disable, setDisable] = useState(false)
  const handleBlockClick = e => {
    if (turns % 2 === 0) {
      setValue('X')
      setBoardState({
        ...boardState,
        [e.target.id]: 'X',
      })
    } else {
      setValue('O')
      setBoardState({
        ...boardState,
        [e.target.id]: 'O',
      })
    }
    setTurns(turns + 1)
    setDisable(true)
  }
  return (
    <button
      className='tic-toc-square'
      id={`${rowId}${colId}`}
      data-testid={`${rowId}${colId}`}
      onClick={handleBlockClick}
      disabled={disable}
    >
      {value}
    </button>
  )
}

export default Block
