import React from 'react'

function BlockButton({value, onClick}) {
  return (
    <div>
      <div className='d-grid gap-3'>
      <button type='button' className='btn btn-outline-primary btn-block' onClick={onClick}>{value}</button>
    </div>
    </div>
  )
}

export default BlockButton