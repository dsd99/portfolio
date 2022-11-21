import React, {useState} from 'react'
import Link from "next/link"
import NavItems from "../data/NavItems"

const Nav = () => {

    const [isActive, setIsActive] = useState(true)

    function openNav() {
        setIsActive(prevOpen => !prevOpen)
    }

    const style = {
        logo: `text-3xl font-bold text-teal-500`,
        navPrimary: `fixed top-0 right-0 left-0 flex place-content-between items-center py-4 px-8 lg:px-20 bg-zinc-900 opacity-90 border-light z-10`,
        navSecondary: `sm:hidden ${isActive ? "-translate-x-full" : "-translate-x-0"} 
                       fixed bottom-0 top-0 left-0 w-full bg-zinc-900 opacity-90 z-30 transition-transform duration-700`,
        navPrimaryContainer: `sm:flex gap-8 hidden`,
        navSecondaryContainer: `flex flex-col fixed bottom-10 px-16 w-full`,
        navToggle: `text-xl fixed right-8 bx ${isActive ? "bx-menu" : "bx-x"} sm:hidden z-40`,
    }

    return (
        <nav className={style.navPrimary}>
            <Link href="/">
                <div className={style.logo}>NP</div>
            </Link>

            {/* Primary Nav */}
            <div className={style.navPrimaryContainer}>
                {NavItems.map(item => (
                    <Link 
                        key={item.id}
                        className="underline-teal" 
                        href={item.link}
                        >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Toggle Button */}
            <i onClick={openNav} className={style.navToggle}></i>

            {/* Secondary Nav */}
            <div className={style.navSecondary}>
                <div className={style.navSecondaryContainer}>
                    {NavItems.map(item => (
                        <div key={item.id}>
                            <Link         
                                href={item.link}
                                onClick={() => setIsActive(true)}
                            >
                               0{item.id}. {item.name}
                            </Link>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Nav
