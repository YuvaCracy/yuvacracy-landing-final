import React from 'react'
import { useRouter } from 'nextjs-toploader/app'

const PrimaryButton = ({ data }) => {
  return (
    <button onClick={() => data.execute()} className='text-white  bg-primary font-montserrat px-[1.5rem] py-[.5rem] rounded-md  ' >
      {data.title}
    </button>
  )
}

export default PrimaryButton
