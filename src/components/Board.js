import React, { useContext, useEffect } from 'react'
import RowsInBoard from './RowsInBoard'
import { GameContext } from './../store/GameState'
import winningCombinationO from '../store/winningCombinationO'
import winningCombinationX from '../store/winningCombinationX'
import hasWinningCombination from '../store/boardContainsObject'

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
  hasWinningCombination(boardState, XDiagonalL)

const Board = ({ rows, cols }) => {
  const { outcome, boardState, setOutcome } = useContext(GameContext)
  const rowArr = [...Array(Number.parseInt(rows))]

  useEffect(() => {
    const XIsWinner = checkXIsWinner(boardState)
    const OIsWinner = checkOIsWinner(boardState)

    if (XIsWinner) setOutcome('Winner is X')
    else if (OIsWinner) setOutcome('Winner is O')
    else setOutcome('')

    //eslint-disable-next-line
  }, [boardState])

  return (
    <div className='game-board'>
      <div className='board'>
        <RowsInBoard rowArr={rowArr} cols={cols} />
      </div>
      <div className='outcome'>{outcome}</div>
    </div>
  )
}

export default Board
