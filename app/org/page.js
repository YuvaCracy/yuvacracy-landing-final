'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Org = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/org/yuvacracy')
  }, [])
  return null;
}

export default Org
