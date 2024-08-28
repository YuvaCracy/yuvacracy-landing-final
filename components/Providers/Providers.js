'use client';

import React from 'react'
import Progress from './Progress'

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <Progress />
    </>
  )
}

export default Providers
