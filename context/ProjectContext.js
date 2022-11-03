import { createContext, useState } from "react"
import { db } from "../firebase/FirebaseConfig"
import {query, collection, onSnapshot} from "firebase/firestore"
import { useEffect } from "react"

const ProjectContext = createContext()

const ProjectContextProvider = ({children}) => {

    const [projects, setProjects] = useState([])

    // read Project from collection project at Firestore
    const q = query(collection(db, "projects"))

    const getProjectData = () => {
        return (
            onSnapshot(q, querySnapshot => {
                let projectArr = []
                querySnapshot.forEach(doc => {
                    projectArr.push({...doc.data(), id: doc.id})
                })
                setProjects(projectArr)
            })    
        )
    }

    useEffect(() => {
        getProjectData()
    }, [])
    
    // console.log(projects)
    


    return (
        <ProjectContext.Provider value={{projects}}>
            {children}
        </ProjectContext.Provider>
    )
}

export {ProjectContextProvider, ProjectContext}