import Link from 'next/link'
import React, { useState } from 'react'
import ButtonRound from './buttons/ButtonRound'

const Contact = () => {

  const style = {
    container: `flex gap-8 mt-16 items-center sm:items-start`,
    btnWrapper: `flex flex-col mt-8 items-start`,
    btn: `w-48 py-4 rounded-sm mx-auto sm:mx-0
              flex justify-start items-center gap-2 pl-6
              hover:bg-zinc-50 hover:text-zinc-800 hover:opacity-100 duration-300 ease-in-out`,
  }

  const [isHidden, setIsHidden] = useState(false)

  return (
    <div>   
      <h2 className='relative'>Contact <span className='watermark'>Contact</span></h2>
      
      <div className={style.btnWrapper}>
        <Link href={"https://www.linkedin.com/in/naomi-pham/"} target={'_blank'}>
          <div className={style.btn}>
            LinkedIn <i className='bx bx-right-arrow-alt text-xl'></i>
          </div>
        </Link>

        <Link href={"mailto:phambaonguyendn@gmail.com"} target={'_blank'}>
          <div className={style.btn}>
            Email <i className='bx bx-right-arrow-alt text-xl'></i>
          </div>
        </Link>

        <div class="flex">
          <div onClick={() => setIsHidden(prevHidden => !prevHidden)} className={style.btn}>
            Phone <i className='bx bx-right-arrow-alt text-xl'></i>
          </div>
          {isHidden && <div className={style.btn}>+84 923 408 074</div>}
        </div>
        
        <Link href={"https://github.com/naomi-pham"} target={'_blank'}>
          <div className={style.btn}>
            Visit Github <i className='bx bx-right-arrow-alt text-xl'></i>
          </div>
        </Link>
        
        <Link href={"https://bit.ly/3FEQQV6"} target={'_blank'}>
          <div className={style.btn}>
            View my Resume <i className='bx bx-right-arrow-alt text-xl'></i>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Contact