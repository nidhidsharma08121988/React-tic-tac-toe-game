import { render, screen } from '@testing-library/react'
import Board from '../components/Board'

describe('Game won', () => {
  describe('Player X wins', () => {
    test('Consecutive X in a row', () => {
      const boardState = {
        R1C1: 'X',
        R1C2: 'X',
        R1C3: 'X',
        R2C1: 'O',
        R2C2: '',
        R2C3: '',
        R3C1: '',
        R3C2: '',
        R3C3: '',
      }
      render(<Board boardState={boardState} rows='3' cols='3' />)

      expect(screen.getByText('Winner is X')).toBeTruthy()
    })
    test('Consecutive X in a column', () => {})
    test('Consecutive X diagnally', () => {})
  })
})
