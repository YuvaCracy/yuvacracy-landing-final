import React from 'react'

const SecondaryButton = ({ data, icon, style }) => {
  const customStyle = ` active:scale-[.9] duration-300 text-primary flex justify-center items-center bg-white border-2 border-primary  font-montserrat px-[1.5rem] py-[.5rem] rounded-md  ${style}  `
  return (
    <button onClick={() => data.execute()} className={customStyle} >
      {data.title}
      {icon && <span className='pl-2'>{icon}</span>}
    </button>
  )
}

export default SecondaryButton
