import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'

describe('Freeze', () => {
  describe('when any player wins', () => {
    test('the game freezes', () => {
      render(<App />)
      
    })
    test('a start again button must appear', () => {})
  })
})
