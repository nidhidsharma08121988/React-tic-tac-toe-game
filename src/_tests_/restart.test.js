import { render, screen } from '@testing-library/react'
import StartAgain from './../components/StartAgain'
import { GameContext } from '../store/GameState'

describe('When Start Again/Restart button is clicked:', () => {
  test('The game is reset', () => {
    const resetGame = jest.fn()
    render(
      <GameContext.Provider value={{ resetGame }}>
        <StartAgain restartGame={true} />
      </GameContext.Provider>
    )
    const startAgainBtn = screen.getByTestId('start-again-btn')
    startAgainBtn.click()
    expect(resetGame).toBeCalled()
  })
  test('The button becomes hidden', () => {})
  test('Must set outcome to empty string', () => {})
})
