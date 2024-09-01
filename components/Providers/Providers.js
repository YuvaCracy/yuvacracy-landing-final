'use client';

import React from 'react'
import Progress from './Progress'
import { Suspense } from 'react';

const Providers = ({ children }) => {
  return (
    <Suspense fallback={<><div>Loading......</div></>} >
      {children}
      <Progress />
    </Suspense>
  )
}

export default Providers
