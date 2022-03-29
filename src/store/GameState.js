import React, { useReducer, createContext, useEffect } from 'react'
import gameReducer from './gameReducer'
import { SET_BOARD_STATE, SET_TURNS, SET_OUTCOME } from './types'
import winningCombinationX from './winningCombinationX'
import winningCombinationO from './winningCombinationO'
import boardContainsObject from './boardContainsObject'

const initialState = {
  boardState: {
    R1C1: {
      value: '',
      disabled: false,
    },
    R1C2: {
      value: '',
      disabled: false,
    },
    R1C3: {
      value: '',
      disabled: false,
    },
    R2C1: {
      value: '',
      disabled: false,
    },
    R2C2: {
      value: '',
      disabled: false,
    },
    R2C3: {
      value: '',
      disabled: false,
    },
    R3C1: {
      value: '',
      disabled: false,
    },
    R3C2: {
      value: '',
      disabled: false,
    },
    R3C3: {
      value: '',
      disabled: false,
    },
  },
  outcome: '',
  turns: 0,
}

export const GameContext = createContext(initialState)

const GameState = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  useEffect(() => {
    if (boardContainsObject(state.boardState, winningCombinationX))
      setOutcome('Winner is X')
    if (boardContainsObject(state.boardState, winningCombinationO))
      setOutcome('Winner is O')
  }, [state.boardState])

  const setBoardState = newBoardState => {
    dispatch({
      type: SET_BOARD_STATE,
      payload: newBoardState,
    })
  }

  const setTurns = turns => {
    dispatch({
      type: SET_TURNS,
      payload: turns,
    })
  }

  const setOutcome = text => {
    dispatch({
      type: SET_OUTCOME,
      payload: text,
    })
  }
  return (
    <GameContext.Provider
      value={{
        boardState: state.boardState,
        setBoardState,
        turns: state.turns,
        setTurns,
        outcome: state.outcome,
        setOutcome,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameState
