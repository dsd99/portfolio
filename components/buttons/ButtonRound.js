const style = {
  btn: `border border-zinc-700 w-48 mx-auto py-4 rounded-full 
        flex justify-center items-center gap-2
        hover:bg-zinc-50 hover:text-zinc-800 hover:opacity-100 duration-300 ease-in-out`
}

const ButtonRound = ({children}) => {
  return (
    <button className={style.btn}>
        {children}
    </button>
  )
}

export default ButtonRound