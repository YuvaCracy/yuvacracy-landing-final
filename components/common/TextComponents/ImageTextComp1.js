import React from 'react'
import CustomTitle from '../CustomTitile'
import Image from 'next/image'

const ImageTextComp1 = ({title, subtitle, desc, imgSrc, data}) => {
  return (
    <div className="flex items-center py-14">
          <div className="flex flex-col w-[50%]">
            <CustomTitle
              title={title}
              subtitle={subtitle}
            />
            <span className="text-lg text-textSecond">
              {desc}
            </span>

            {data && <div>
              
            </div>}
          </div>
          <div className="w-[50%] flex justify-center">
            <Image alt="YuvaCracy is a foundation for Youth" className="w-[24rem]" src={imgSrc} />
          </div>
        </div>
  )
}

export default ImageTextComp1