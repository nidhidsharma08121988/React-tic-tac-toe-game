import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import {
  consecutiveXInRow,
  consecutiveXInCol,
  consecutiveXDiagonallyFromLeft,
  consecutiveXDiagonallyFromRight,
  consecutiveOInRow,
  consecutiveOInCol,
} from './testData'

describe('Game won', () => {
  describe('Player X wins', () => {
    test('Consecutive X in row 1', async () => {
      render(<App />)

      consecutiveXInRow('R1', 'R3')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in row 2', async () => {
      render(<App />)
      consecutiveXInRow('R1', 'R3')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in row 3', async () => {
      render(<App />)

      consecutiveXInRow('R3', 'R1')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in a column 1', async () => {
      render(<App />)

      consecutiveXInCol('C1', 'C3')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in a column 2', async () => {
      render(<App />)

      consecutiveXInCol('C2', 'C3')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in a column 3', async () => {
      render(<App />)

      consecutiveXInCol('C3', 'C1')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X diagonally from left corner', async () => {
      render(<App />)
      consecutiveXDiagonallyFromLeft()
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })
    test('Consecutive X diagonally from right corner', async () => {
      render(<App />)
      consecutiveXDiagonallyFromRight()
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })
  })
  describe('Player O wins:', () => {
    test('Consecutive O in row 1', async () => {
      render(<App />)

      consecutiveOInRow('R1')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in row 2', async () => {
      render(<App />)
      consecutiveOInRow('R2')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in row 3', async () => {
      render(<App />)

      consecutiveOInRow('R3')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in column 1', async () => {
      render(<App />)

      consecutiveOInCol('C1')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in column 2', async () => {
      render(<App />)

      consecutiveOInCol('C2')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in column 3', async () => {
      render(<App />)

      consecutiveOInCol('C3')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
  })
})
