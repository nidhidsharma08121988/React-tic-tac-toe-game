import {
  SET_BOARD_STATE,
  SET_TURNS,
  SET_OUTCOME,
  FREEZE_GAME,
  RESET_GAME,
} from './types'

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
    case SET_OUTCOME:
      return {
        ...state,
        outcome: action.payload,
      }
    case FREEZE_GAME:
      return {
        ...state,
        boardState: {
          R1C1: {
            value: state.boardState.R1C1.value,
            disabled: true,
          },
          R1C2: {
            value: state.boardState.R1C2.value,
            disabled: true,
          },
          R1C3: {
            value: state.boardState.R1C3.value,
            disabled: true,
          },
          R2C1: {
            value: state.boardState.R2C1.value,
            disabled: true,
          },
          R2C2: {
            value: state.boardState.R2C2.value,
            disabled: true,
          },
          R2C3: {
            value: state.boardState.R2C3.value,
            disabled: true,
          },
          R3C1: {
            value: state.boardState.R3C1.value,
            disabled: true,
          },
          R3C2: {
            value: state.boardState.R3C2.value,
            disabled: true,
          },
          R3C3: {
            value: state.boardState.R3C3.value,
            disabled: true,
          },
        },
      }
    case RESET_GAME:
      return {
        ...state,
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
    default:
      return state
  }
}

export default gameReducer
