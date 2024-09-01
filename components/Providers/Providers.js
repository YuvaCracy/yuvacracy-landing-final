'use client';

import React from 'react'
import Progress from './Progress'
import { Suspense } from 'react';

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <Progress />
    </>
  )
}

export default Providers
