import React from 'react'

const PrimaryButton = ({ data }) => {
  return (
    <button onClick={() => data.execute()} className='text-white  bg-primary font-montserrat px-[1.5rem] py-[.5rem] rounded-md  ' >
      {data.title}
    </button>
  )
}

export default PrimaryButton
