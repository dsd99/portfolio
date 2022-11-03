import React from 'react'
import {SocialIcon} from "react-social-icons"
import { motion } from "framer-motion"

function Header() {


    return (
        <motion.div
            initial={{
                y: 75,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{duration: 1}}
            className='flex gap-5 sm:gap-8 justify-center'
        >
            {/* Social icons */}
            <div className="bg-gray-800 rounded-full hover:opacity-70">
                <SocialIcon
                    bgColor='transparent'
                    fgColor='#14b8a6'
                    style={{ height: 50, width: 50 }}
                    target="_blank" 
                    url="https://www.linkedin.com/in/naomi-pham/"
                />
            </div>
            <div className="bg-gray-800 rounded-full hover:opacity-70">
                <SocialIcon
                    bgColor='transparent'
                    fgColor='#14b8a6'
                    target="_blank"
                    url="https://twitter.com/naomipham_"
                />
            </div>
            <div className="bg-gray-800 rounded-full hover:opacity-70">
                <SocialIcon
                    bgColor='transparent'
                    fgColor='#14b8a6'
                    target="_blank"
                    url="https://github.com/naomi-pham"
                />
            </div>
            <div className="bg-gray-800 rounded-full hover:opacity-70 hover">
                <SocialIcon
                    bgColor='transparent'
                    fgColor='#14b8a6'
                    target="_blank"
                    url="mailto:phambaonguyendn@gmail.com"
                />
            </div>
        </motion.div>

    )
}

export default Header

// https://www.npmjs.com/package/react-social-icons