import React from 'react'

const PrimaryButton = ({ data, icon }) => {
  return (
    <button onClick={() => data.execute()} className=' active:scale-[.9] duration-300 text-white flex items-center bg-primary font-montserrat px-[1.5rem] py-[.5rem] rounded-md  ' >
      {data.title}
      {icon && <span className='pl-2'>{icon}</span>}
    </button>
  )
}

export default PrimaryButton
