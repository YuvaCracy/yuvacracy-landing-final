import React from 'react'

const List = ({ items, styles = "", ordered = false }) => {

  const customStyles = `  text-[#2F2F2F]  ${styles} `
  return (
    <>
      {
        ordered
          ?
          <ol className='list-decimal pl-[2.5rem] ' >
            {
              items && items.map((data, index) => {
                return (
                  <li className={customStyles} >
                    <span className='  font-openSans text-[.95rem] font-[600] ' >
                      {data.head && data.head}
                    </span>
                    <span className=' opacity-[.8] ml-[.3rem] ' >
                      {data.desc && data.desc}
                    </span>
                  </li>
                )
              })
            }
          </ol>
          :
          <ul className='list-disc pl-[2.5rem] ' >
            {
              items && items.map((data, index) => {
                return (
                  <li className={customStyles} >
                    <span className='  font-openSans text-[.95rem] font-[600] ' >
                      {data.head && data.head}
                    </span>
                    <span className=' opacity-[.8] ml-[.3rem] ' >
                      {data.desc && data.desc}
                    </span>
                  </li>
                )
              })
            }
          </ul>
      }

    </>
  )
}

export default List
