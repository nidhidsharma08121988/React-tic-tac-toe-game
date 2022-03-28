import React, { useContext } from 'react'
import { GameContext } from '../store/GameState'

const Block = ({ colId, rowId }) => {
  const { boardState, setBoardState, turns, setTurns } = useContext(GameContext)
  const setDisableValue = () => boardState[`${rowId}${colId}`].disabled
  const showValue = () => boardState[`${rowId}${colId}`].value

  const setBlockValueTo = (e, value) => {
    const newBlockState = {
      value: value,
      disabled: true,
    }
    setBoardState({
      ...boardState,
      [e.target.id]: newBlockState,
    })
  }

  const handleBlockClick = e => {
    if (turns % 2 === 0) {
      setBlockValueTo(e, 'X')
    } else {
      setBlockValueTo(e, 'O')
    }
    setTurns(turns + 1)
  }
  return (
    <button
      className='tic-toc-square'
      id={`${rowId}${colId}`}
      data-testid={`${rowId}${colId}`}
      onClick={handleBlockClick}
      disabled={setDisableValue()}
    >
      {showValue()}
    </button>
  )
}

export default Block
