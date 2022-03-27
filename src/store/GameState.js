import React, { useReducer, createContext } from 'react'
import gameReducer from './gameReducer'
import { SET_BOARD_STATE } from './types'

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
  rows: '3',
  cols: '3',
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
  return (
    <GameContext.Provider
      value={{ boardState: state.boardState, setBoardState }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default GameState
