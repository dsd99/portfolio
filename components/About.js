import React, { useEffect, useState } from 'react'
import { db } from '../firebase/FirebaseConfig'
import {doc, getDoc} from "firebase/firestore"

const style = {
  wrapper: `grid grid-cols-1 sm:grid-cols-2`,
  container: `flex flex-col gap-8 sm:gap-16`,
  img: `self-center w-16 sm:w-28`,
  textContainer: `mt-4 sm:mt-16 lg:mt-24`,
}

const About = () => {

  const [about, setAbout] = useState({
    content: ""
  })

  const getAboutDoc = async () => {
    const AboutDoc = doc(db, "pageInfo", "1")
    const data = await getDoc(AboutDoc)
    setAbout({...data.data(), id: data.id}) 
  }

  useEffect(() => {
    getAboutDoc()
  }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2 className='relative'>About<span className='watermark'>About</span></h2>
        <img
            src="./assets/leaf.png"
            alt="leaf illustration"
            className={style.img}
        />
      </div>
      <div className={style.textContainer}>
        <p>{about.paragraph1}</p>
        <p>{about.paragraph2}</p>
        <p>{about.paragraph3}</p>
      </div>
    </div>
  )
}

export default About