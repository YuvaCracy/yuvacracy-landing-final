import React from 'react'

const Heading = ({ data, styles = "", }) => {
  const customStyles = ` text-[2rem] font-montserrat font-bold text-[#2F2F2F]   ${styles} `

  return (
    <h3 className={customStyles} >
      {data.head}
    </h3>
  )
}

export default Heading
