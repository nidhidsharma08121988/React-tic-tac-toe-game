import { render, screen, waitFor } from '@testing-library/react'
import StartAgain from './../components/StartAgain'
import GameState, { GameContext } from '../store/GameState'
import { consecutiveXDiagonallyFromRight } from './testData'
import Board from '../components/Board'

describe('When Start Again/Restart button is clicked:', () => {
  test('The game is reset', () => {
    const resetGame = jest.fn()
    const setRestart = jest.fn()
    render(
      <GameContext.Provider value={{ resetGame }}>
        <StartAgain restartGame={true} setRestartGame={setRestart} />
      </GameContext.Provider>
    )
    const startAgainBtn = screen.getByTestId('start-again-btn')
    startAgainBtn.click()
    expect(resetGame).toBeCalled()
    expect(setRestart).toBeCalledWith(false)
  })
  test('The button becomes hidden', async () => {
    render(
      <GameState>
        <Board rows='3' cols='3' />
      </GameState>
    )
    consecutiveXDiagonallyFromRight()
    await waitFor(() => {
      const startAgainBtn = screen.getByTestId('start-again-btn')
      startAgainBtn.click()
      const restartbtn = screen.queryByTestId('start-again-btn')
      expect(restartbtn).toBeFalsy()
    })
  })
})
