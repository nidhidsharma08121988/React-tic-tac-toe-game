import { screen } from '@testing-library/react'

export const consecutiveXInRow = (xRowId, oRowId) => {
  for (let col = 1; col <= 3; col++) {
    const xBtn = screen.getByTestId(`${xRowId}C${col}`)
    xBtn.click()
    const oBtn = screen.getByTestId(`${oRowId}C${col}`)
    oBtn.click()
  }
}

export const consecutiveXInCol = (xColId, oColId) => {
  for (let row = 1; row <= 3; row++) {
    const xBtn = screen.getByTestId(`R${row}${xColId}`)
    xBtn.click()
    const oBtn = screen.getByTestId(`R${row}${oColId}`)
    oBtn.click()
  }
}

export const consecutiveXDiagonallyFromLeft = () => {
  for (let i = 1; i < 3; i++) {
    let xBtn = screen.getByTestId(`R${i}C${i}`)
    xBtn.click()
    let oBtn = screen.getByTestId(`R1C${i + 1}`)
    oBtn.click()
  }
  let xbtn = screen.getByTestId('R3C3')
  xbtn.click()
}

export const consecutiveXDiagonallyFromRight = () => {
  for (let i = 1, j = 3; i < 3 && j > 1; i++, j--) {
    let xBtn = screen.getByTestId(`R${i}C${j}`)
    xBtn.click()
    let oBtn = screen.getByTestId(`R1C${i}`)
    oBtn.click()
  }
  let xbtn = screen.getByTestId('R3C1')
  xbtn.click()
}

export const consecutiveOInRow = rowId => {
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

export const consecutiveOInCol = colId => {
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
