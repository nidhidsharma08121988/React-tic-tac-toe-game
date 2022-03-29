const boardContainsObject = (boardState, winningCombination) => {
  // console.log('winningCombination', winningCombination)
  // console.log('key', Object.keys(winningCombination))
  Object.keys(winningCombination).map(key => {
    // console.log('object', winningCombination[key])
    // console.log('is object', typeof winningCombination[key] === 'object')
    if (typeof winningCombination[key] === 'object') {
      const arrayofKeyValue = Object.entries(winningCombination[key])
      return arrayofKeyValue.every(item => {
        const key = item[0]
        const value = item[1].value
        console.log('item', item)
        console.log('key', key)
        console.log('value', value)
        console.log('boardState', boardState[key])
        console.log('boardState value', boardState[key].value)
        return value === boardState[key].value
      })
    }
    return false
  })
}

export default boardContainsObject
