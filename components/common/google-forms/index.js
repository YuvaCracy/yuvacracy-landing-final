import React from 'react'

const GoogleForm = ({ id = "", styles }) => {
  const customStyles = `${styles}`;
  return (
    <div className=' w-[100%]  flex justify-center items-center   '  >
      <iframe src={`https://docs.google.com/forms/d/e/${id}/viewform?embedded=true`} className={customStyles}  >Loading…</iframe>

    </div>
  )
}

export default GoogleForm
