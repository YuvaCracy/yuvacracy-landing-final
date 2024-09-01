import React from 'react'
import { Suspense } from 'react'
import Modal from './index.js'
import { MdCancel, MdOutlineClose } from 'react-icons/md'
import { FaCross } from 'react-icons/fa'
import { usePathname, useRouter, useSearchParams } from 'next/navigation.js'

const PromoVideoPlayer = ({ visible, onClose = () => { }, callback = () => { }, focusMode = false }) => {
  const search = useSearchParams();
  const pathname = usePathname()
  const router = useRouter();
  const promoId = search.get('promoId');
  if (!promoId) {
    return null;
  }

  return (
    <Modal visible={visible} onClose={onClose} callback={callback} focusMode={focusMode} >
      <div className=' relative flex  justify-center items-center w-fit h-[35rem]   ' >
        <div onClick={() => router.push(pathname)} className=' cursor-pointer absolute text-white bg-primary flex justify-center items-center  size-[2rem] rounded-full right-[-3rem] top-[-0rem]   ' >
          <MdOutlineClose />
        </div>

        <div className=' w-fit  h-[calc(100%-4rem)] aspect-video   ' >
          <iframe className='w-full h-full ' src={`https://www.youtube.com/embed/${promoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
      </div>
    </Modal>
  )
}

export default PromoVideoPlayer
