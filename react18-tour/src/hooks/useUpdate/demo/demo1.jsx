import React from 'react'
import { useUpdate } from '../../index'

export default () => {
  const update = useUpdate()

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update}>
        update
      </button>
    </>
  )
}
