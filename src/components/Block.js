import React, { useContext, useEffect } from 'react'
import { GameContext } from '../store/GameState'
import {
  winningCombinationO,
  winningCombinationX,
} from '../store/winningCombination'
import { hasWinningCombination } from '../store/boardContainsObject'

const {
  XInSameCol1,
  XInSameCol2,
  XInSameCol3,
  XInSameRow1,
  XInSameRow2,
  XInSameRow3,
  XDiagonalL,
  XDiagonalR,
} = winningCombinationX

const {
  OInSameCol1,
  OInSameCol2,
  OInSameCol3,
  OInSameRow1,
  OInSameRow2,
  OInSameRow3,
  ODiagonalL,
  ODiagonalR,
} = winningCombinationO

const checkOIsWinner = boardState =>
  hasWinningCombination(boardState, OInSameRow1) ||
  hasWinningCombination(boardState, OInSameRow2) ||
  hasWinningCombination(boardState, OInSameRow3) ||
  hasWinningCombination(boardState, OInSameCol1) ||
  hasWinningCombination(boardState, OInSameCol2) ||
  hasWinningCombination(boardState, OInSameCol3)

// hasWinningCombination(boardState, ODiagonalL) ||
// hasWinningCombination(boardState, ODiagonalR)

const checkXIsWinner = boardState =>
  hasWinningCombination(boardState, XInSameRow1) ||
  hasWinningCombination(boardState, XInSameRow2) ||
  hasWinningCombination(boardState, XInSameRow3) ||
  hasWinningCombination(boardState, XInSameCol1) ||
  hasWinningCombination(boardState, XInSameCol2) ||
  hasWinningCombination(boardState, XInSameCol3) ||
  hasWinningCombination(boardState, XDiagonalL) ||
  hasWinningCombination(boardState, XDiagonalR)

const Block = ({ colId, rowId }) => {
  const { boardState, setBoardState, turns, setTurns, setOutcome } =
    useContext(GameContext)

  useEffect(() => {
    checkBoardStateAndSetOutcome()
  }, [boardState])

  const checkBoardStateAndSetOutcome = () => {
    const XIsWinner = checkXIsWinner(boardState)
    const OIsWinner = checkOIsWinner(boardState)

    if (XIsWinner) setOutcome('Winner is X')
    else if (OIsWinner) setOutcome('Winner is O')
    else setOutcome('')
  }

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
