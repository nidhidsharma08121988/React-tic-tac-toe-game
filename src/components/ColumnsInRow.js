import React from 'react'

const ColumnsInRow = ({ colArr: columns }) => {
  return columns.map((item, index) => (
    <button className='tic-toc-square' key={`C${index + 1}`} />
  ))
}

export default ColumnsInRow
