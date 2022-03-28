import { SET_BOARD_STATE, SET_TURNS } from './types'

const gameReducer = (state, action) => {
  switch (action.type) {
    case SET_BOARD_STATE:
      return {
        ...state,
        boardState: action.payload,
      }
    case SET_TURNS:
      return {
        ...state,
        turns: action.payload,
      }
    default:
      return state
  }
}

export default gameReducer
