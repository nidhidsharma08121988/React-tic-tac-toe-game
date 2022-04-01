const hasWinningCombination = (boardState, winningCombination) => {
  const arrayofKeyValue = Object.entries(winningCombination)
  return arrayofKeyValue.every(item => {
    const key = item[0]
    return item[1].value === boardState[key].value
  })
}

export default hasWinningCombination
