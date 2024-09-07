import React from 'react'
import Link from 'next/link'

const SingleLink = ({ data, showNav, setShowNav = () => { } }) => {
  return (
    <Link onClick={() => setShowNav(!showNav)} href={data.href} className='xsm_desktop:text-heading text-white font-montserrat font-[500] ' >
      {data.title}
    </Link>
  )
}

export default SingleLink
