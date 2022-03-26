import { render, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'
import App from '../App'

describe('Block selected', () => {
  test('Player X selects a block', () => {
    render(<App />)
    const r2c2 = screen.getByTestId('R2C2')
    r2c2.click()
    expect(r2c2.textContent).toBe('X')
  })
  test('Player O selects a block', () => {
    render(<App />)
    const r2c2 = screen.getByTestId('R2C2')
    r2c2.click()
    const r2c3 = screen.getByTestId('R2C3')
    r2c3.click()
    expect(r2c3.textContent).toBe('O')
  })
  test('No duplicate selection of a block', () => {
    render(<App />)
    const r2c2 = screen.getByTestId('R2C2')
    r2c2.click()
    expect(r2c2.disabled).toBe(true)
  })
})
