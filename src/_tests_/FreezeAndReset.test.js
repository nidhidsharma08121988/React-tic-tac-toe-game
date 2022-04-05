import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import { consecutiveXInRow } from './testData'

describe('Freeze', () => {
  describe('when any player wins', () => {
    test('the game freezes', async () => {
      render(<App />)
      consecutiveXInRow('R1', 'R2')
      const allBlocks = screen.getAllByRole('button')
      const isDeactivated = allBlocks.every(element => !element.disabled)
      await waitFor(() => {
        expect(screen.getByText('Winner is')).toBe(true)
        expect(isDeactivated).toBe(true)
      })
    })
    test('a start again button must appear', () => {})
  })
})
