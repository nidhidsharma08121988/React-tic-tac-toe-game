import { useContext } from 'react'
import { GameContext } from '../store/GameState'

const StartAgain = ({ restartGame, setRestartGame }) => {
  const { resetGame } = useContext(GameContext)
  const handleReset = e => {
    resetGame()
    setRestartGame(false)
  }
  return (
    restartGame && (
      <button
        data-testid='start-again-btn'
        className='restart-btn'
        onClick={handleReset}
      >
        Start Again
      </button>
    )
  )
}

export default StartAgain
