import { render, screen } from '@testing-library/react'
import Board from '../components/Board'
import GameState from '../store/GameState'

describe('Game won', () => {
  describe('Player X wins', () => {
    test('Consecutive X in row 1', () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      for (let col = 1; col <= 3; col++) {
        const xBtn = screen.getByTestId(`R1C${col}`)
        xBtn.click()
        const oBtn = screen.getByTestId(`R3C${col}`)
        oBtn.click()
      }

      expect(screen.getByText('Winner is X')).toBeTruthy()
    })
    test('Consecutive X in a column', () => {})
    test('Consecutive X diagnally', () => {})
  })
})
