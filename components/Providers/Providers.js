'use client';

import React from 'react'
import Progress from './Progress'
import { Suspense } from 'react';
import ClientMeta from '@/utils/ClientMeta';

const Providers = ({ children }) => {
  return (
    <>
      <ClientMeta />
      {children}
      <Progress />
    </>
  )
}

export default Providers
