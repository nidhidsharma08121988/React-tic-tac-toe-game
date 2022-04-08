import React, { useReducer, createContext } from 'react'
import gameReducer from './gameReducer'
import { SET_BOARD_STATE, SET_TURNS, SET_OUTCOME, FREEZE_GAME } from './types'

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

  const freezeGame = () => {
    dispatch({
      type: FREEZE_GAME,
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
        freezeGame,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameState
