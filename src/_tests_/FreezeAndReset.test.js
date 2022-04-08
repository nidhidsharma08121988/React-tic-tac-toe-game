import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import { consecutiveXInRow, consecutiveOInRow } from './testData'

describe('Freeze', () => {
  describe('when any player wins', () => {
    test('the game freezes when x wins', async () => {
      render(<App />)
      consecutiveXInRow('R1', 'R2')
      const allBlocks = screen.getAllByRole('button')
      const isDeactivated = allBlocks.every(element => !element.style.disabled)
      await waitFor(() => {
        expect(isDeactivated).toBe(true)
      })
    })
    test('the game freezes when o wins', async () => {
      render(<App />)
      consecutiveOInRow('R1')
      const allBlocks = screen.getAllByRole('button')
      const isDeactivated = allBlocks.every(element => !element.style.disabled)
      await waitFor(() => {
        expect(isDeactivated).toBe(true)
      })
    })
    test('a start again button must appear', () => {})
  })
})
