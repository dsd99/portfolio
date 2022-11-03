import {Cursor, useTypewriter} from "react-simple-typewriter"
import Icons from "./icons/SocialIconList"
import Link from "next/link"
import ButtonRound from './buttons/ButtonRound'

const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Naomi.", 
            "I'm a front-end developer.",
            "My favorite drink is coffee ☕",
            "and I'm also a Potterhead 🧙"
        ],
        loop: true,
        delaySpeed: 2000,
    })

    const style = {
        wrapper: `flex-col-center text-center sm:gap-16 gap-12`,
        imgContainer: `h-40 w-40 border border-zinc-700 rounded-full self-center flex-center`,
    }

    return (
        <div className={style.wrapper}>
            <div className={style.imgContainer}>
                <img
                    src="./assets/avatar-cv.png"
                    alt="Picture of the author"
                    width={125}
                    height={125}
                />
            </div>
            <h1>
                {text}
                <Cursor cursorColor='#14b8a6' />
            </h1>  

            <Icons />

            <Link href="#projects">
                <ButtonRound>
                    See my work
                    <i className='bx bx-down-arrow-alt' ></i>
                </ButtonRound>
            </Link>

        </div>
    )
}

export default Hero