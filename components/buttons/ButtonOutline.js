import React from 'react'

const style = {
  btn: `p-2 rounded-sm w-36 border border-zinc-400 hover:bg-teal-400`
}

const ButtonOutline = ({children}) => {
  return (
    <button className={style.btn}>
        {children}
    </button>
  )
}

export default ButtonOutline