import { render, screen } from '@testing-library/react'
import Board from '../components/Board'
import GameState from '../store/GameState'

describe('Game won', () => {
  describe('Player X wins', () => {
    const consecutiveRowClick = (xRowId, oRowId) => {
      for (let col = 1; col <= 3; col++) {
        const xBtn = screen.getByTestId(`${xRowId}C${col}`)
        xBtn.click()
        const oBtn = screen.getByTestId(`${oRowId}C${col}`)
        oBtn.click()
      }
    }

    test('Consecutive X in row 1', () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveRowClick('R1', 'R3')
      expect(screen.getByText('Winner is X')).toBeTruthy()
    })

    test('Consecutive X in row 2', () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveRowClick('R1', 'R3')

      expect(screen.getByText('Winner is X')).toBeTruthy()
    })

    test('Consecutive X in row 3', () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveRowClick('R3', 'R1')
      expect(screen.getByText('Winner is X')).toBeTruthy()
    })

    test('Consecutive X in a column 1', () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      for (let row = 1; row <= 3; row++) {
        const xBtn = screen.getByTestId(`R${row}C1`)
        xBtn.click()
        const oBtn = screen.getByTestId(`R${row}C3`)
        oBtn.click()
      }
      expect(screen.getByText('Winner is X')).toBeTruthy()
    })
    test('Consecutive X diagnally', () => {})
  })
})
