import { render, screen } from '@testing-library/react'
import Board from '../components/Board'
import { initialState } from './testData'
import GameState from '../store/GameState'

describe('Game won', () => {
  describe('Player X wins', () => {
    const boardState = {
      R1C1: 'X',
      R1C2: 'X',
      R1C3: 'X',
      R2C1: 'O',
      R2C2: 'O',
      R2C3: '',
      R3C1: '',
      R3C2: '',
      R3C3: '',
    }

    const myInitialState = {
      ...initialState,
      boardState: boardState,
    }

    test('Consecutive X in a row', () => {
      render(
        <GameState value={{ initialState }}>
          <Board rows='3' cols='3' />
        </GameState>
      )

      expect(screen.getByText('Winner is X')).toBeTruthy()
    })
    test('Consecutive X in a column', () => {})
    test('Consecutive X diagnally', () => {})
  })
})
