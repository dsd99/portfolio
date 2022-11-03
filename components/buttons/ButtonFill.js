import React from 'react'

const style = {
  btn: `p-2 rounded-sm w-36 border border-teal-600 bg-white text-teal-800 hover:bg-teal-400`
}

const ButtonFill = ({children}) => {
  return (
    <button className={style.btn}>
        {children}
    </button>
  )
}

export default ButtonFill