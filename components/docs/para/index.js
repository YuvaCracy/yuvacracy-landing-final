import React from 'react'

const Para = ({ data, styles = "", }) => {

  const customStyles = ` font-openSans text-[.92rem] text-[#2F2F2F]   ${styles} `

  return (
    <p className={customStyles} >
      {data.para}
    </p>
  )
}

export default Para
