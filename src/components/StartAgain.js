const StartAgain = ({ restartGame }) => {
  return (
    restartGame && (
      <button data-testid='start-again-btn' className='restart-btn'>
        Start Again
      </button>
    )
  )
}

export default StartAgain
