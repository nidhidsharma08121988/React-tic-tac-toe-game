import { render, screen, waitFor } from '@testing-library/react'
import { useContext } from 'react'
import GameState, { GameContext } from '../store/GameState'
import { initialBoardState } from './testData'

describe('When Start Again/Restart button is clicked:', () => {
  test('The game is set to intial board state', async () => {
    render(
      <GameState>
        <StartAgain />
      </GameState>
    )
    const { boardState } = useContext(GameContext)

    const startAgainBtn = screen.getByTestId('start-again-btn')
    startAgainBtn.click()
    await waitFor(() => {
      expect(boardState).toBe(initialBoardState)
    })
  })
  test('The button becomes hidden', () => {})
  test('Must set outcome to empty string', () => {})
})
