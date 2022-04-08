import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import {
  consecutiveXInRow,
  consecutiveOInRow,
  consecutiveXDiagonallyFromLeft,
  consecutiveOInCol,
} from './testData'

describe('When any player wins', () => {
  describe('Game must freeze', () => {
    test('when x wins', async () => {
      render(<App />)
      consecutiveXInRow('R1', 'R2')
      const allBlocks = screen.getAllByRole('button')
      const isDeactivated = allBlocks.every(element => !element.style.disabled)
      await waitFor(() => {
        expect(isDeactivated).toBe(true)
      })
    })
    test('when o wins', async () => {
      render(<App />)
      consecutiveOInRow('R1')
      const allBlocks = screen.getAllByRole('button')
      const isDeactivated = allBlocks.every(element => !element.style.disabled)
      await waitFor(() => {
        expect(isDeactivated).toBe(true)
      })
    })
  })
  describe('Game must display restart button', () => {
    test('When X wins', async () => {
      render(<App />)
      consecutiveXDiagonallyFromLeft()
      await waitFor(() => {
        expect(screen.getByTestId('start-again-btn')).toBeTruthy()
      })
    })
    test('When O wins', async () => {
      render(<App />)
      consecutiveOInCol('C2')
      await waitFor(() => {
        expect(screen.getByTestId('start-again-btn')).toBeTruthy()
      })
    })
  })
})
