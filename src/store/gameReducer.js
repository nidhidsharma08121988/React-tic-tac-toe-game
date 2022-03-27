import { SET_BOARD_STATE } from './types'

const gameReducer = (state, action) => {
  switch (action.type) {
    case SET_BOARD_STATE:
      return {
        ...state,
        boardState: action.payload,
      }
    default:
      return state
  }
}

export default gameReducer
