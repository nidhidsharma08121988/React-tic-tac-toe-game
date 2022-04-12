import { render, screen, waitFor } from '@testing-library/react'
import { initialBoardState } from './testData'
import StartAgain from './../components/StartAgain'
import GameState from '../store/GameState'

describe('When Start Again/Restart button is clicked:', () => {
  test('The game is set according to initial boardState', async () => {
    const resetGame = jest.fn()
    const yes = true
    render(
      <GameState value={{ resetGame }}>
        <StartAgain restartGame={yes} />
      </GameState>
    )
    const startAgainBtn = screen.getByTestId('start-again-btn')
    startAgainBtn.click()
    await waitFor(() => {
      expect(resetGame).toBeCalled()
    })
  })
  test('The button becomes hidden', () => {})
  test('Must set outcome to empty string', () => {})
})
