import { render, screen, waitFor } from '@testing-library/react'
import Board from '../components/Board'
import GameState from '../store/GameState'

describe('Game won', () => {
  describe('Player X wins', () => {
    const consecutiveXInRow = (xRowId, oRowId) => {
      for (let col = 1; col <= 3; col++) {
        const xBtn = screen.getByTestId(`${xRowId}C${col}`)
        xBtn.click()
        const oBtn = screen.getByTestId(`${oRowId}C${col}`)
        oBtn.click()
      }
    }

    const consecutiveXInCol = (xColId, oColId) => {
      for (let row = 1; row <= 3; row++) {
        const xBtn = screen.getByTestId(`R${row}${xColId}`)
        xBtn.click()
        const oBtn = screen.getByTestId(`R${row}${oColId}`)
        oBtn.click()
      }
    }

    const consecutiveXDiagonallyFromLeft = () => {
      for (let i = 1; i < 3; i++) {
        let xBtn = screen.getByTestId(`R${i}C${i}`)
        xBtn.click()
        let oBtn = screen.getByTestId(`R1C${i + 1}`)
        oBtn.click()
      }
      let xbtn = screen.getByTestId('R3C3')
      xbtn.click()
    }
    test('Consecutive X in row 1', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveXInRow('R1', 'R3')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in row 2', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveXInRow('R1', 'R3')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in row 3', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveXInRow('R3', 'R1')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in a column 1', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveXInCol('C1', 'C3')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in a column 2', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveXInCol('C2', 'C3')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X in a column 3', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveXInCol('C3', 'C1')
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })

    test('Consecutive X diagonally from left corner', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )
      consecutiveXDiagonallyFromLeft()
      await waitFor(() => {
        expect(screen.getByText('Winner is X')).toBeTruthy()
      })
    })
  })
  describe('Player O wins:', () => {
    const consecutiveOInRow = rowId => {
      let xBtn = null
      let oBtn = null
      if (rowId === 'R1') {
        xBtn = screen.getByTestId('R2C2')
        xBtn.click()
        oBtn = screen.getByTestId(`${rowId}C1`)
        oBtn.click()
        xBtn = screen.getByTestId('R2C3')
        xBtn.click()
        oBtn = screen.getByTestId(`${rowId}C2`)
        oBtn.click()
        xBtn = screen.getByTestId('R3C3')
        xBtn.click()
        oBtn = screen.getByTestId(`${rowId}C3`)
        oBtn.click()
        return
      }
      if (rowId === 'R2') {
        xBtn = screen.getByTestId('R1C2')
        xBtn.click()
        oBtn = screen.getByTestId(`${rowId}C1`)
        oBtn.click()
        xBtn = screen.getByTestId('R1C3')
        xBtn.click()
        oBtn = screen.getByTestId(`${rowId}C2`)
        oBtn.click()
        xBtn = screen.getByTestId('R3C3')
        xBtn.click()
        oBtn = screen.getByTestId(`${rowId}C3`)
        oBtn.click()
        return
      }
      if (rowId === 'R3') {
        xBtn = screen.getByTestId('R1C2')
        xBtn.click()
        oBtn = screen.getByTestId(`${rowId}C1`)
        oBtn.click()
        xBtn = screen.getByTestId('R1C3')
        xBtn.click()
        oBtn = screen.getByTestId(`${rowId}C2`)
        oBtn.click()
        xBtn = screen.getByTestId('R2C3')
        xBtn.click()
        oBtn = screen.getByTestId(`${rowId}C3`)
        oBtn.click()
        return
      }
    }

    const consecutiveOInCol = colId => {
      let xBtn = null
      let oBtn = null
      if (colId === 'C1') {
        xBtn = screen.getByTestId('R2C2')
        xBtn.click()
        oBtn = screen.getByTestId(`R1${colId}`)
        oBtn.click()
        xBtn = screen.getByTestId('R3C3')
        xBtn.click()
        oBtn = screen.getByTestId(`R2${colId}`)
        oBtn.click()
        xBtn = screen.getByTestId('R3C2')
        xBtn.click()
        oBtn = screen.getByTestId(`R3${colId}`)
        oBtn.click()
        return
      }
      if (colId === 'C2') {
        xBtn = screen.getByTestId('R2C1')
        xBtn.click()
        oBtn = screen.getByTestId(`R1${colId}`)
        oBtn.click()
        xBtn = screen.getByTestId('R3C3')
        xBtn.click()
        oBtn = screen.getByTestId(`R2${colId}`)
        oBtn.click()
        xBtn = screen.getByTestId('R3C1')
        xBtn.click()
        oBtn = screen.getByTestId(`R3${colId}`)
        oBtn.click()
        return
      }
      if (colId === 'C3') {
        xBtn = screen.getByTestId('R2C1')
        xBtn.click()
        oBtn = screen.getByTestId(`R1${colId}`)
        oBtn.click()
        xBtn = screen.getByTestId('R3C1')
        xBtn.click()
        oBtn = screen.getByTestId(`R2${colId}`)
        oBtn.click()
        xBtn = screen.getByTestId('R3C2')
        xBtn.click()
        oBtn = screen.getByTestId(`R3${colId}`)
        oBtn.click()
        return
      }
    }

    test('Consecutive O in row 1', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveOInRow('R1')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in row 2', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveOInRow('R2')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in row 3', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveOInRow('R3')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in column 1', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveOInCol('C1')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in column 2', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveOInCol('C2')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
    test('Consecutive O in column 3', async () => {
      render(
        <GameState>
          <Board rows='3' cols='3' />
        </GameState>
      )

      consecutiveOInCol('C3')
      await waitFor(() => {
        expect(screen.getByText('Winner is O')).toBeTruthy()
      })
    })
  })
})
