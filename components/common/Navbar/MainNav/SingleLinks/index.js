import React from 'react'
import Link from 'next/link'

const SingleLink = ({ data }) => {
  return (
    <Link href={data.href} className='text-heading font-montserrat font-[500] ' >
      {data.title}
    </Link>
  )
}

export default SingleLink
