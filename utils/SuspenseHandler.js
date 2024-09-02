'use client'

import React, { Suspense } from 'react'
import ScrollHandler from './ScrollHandler'

const SuspenseHandler = ({ children, fallback }) => {
  return (
    <Suspense fallback={fallback ? fallback : <div>Loading....</div>}>
      {children}
    </Suspense>
  )
}

export default SuspenseHandler
