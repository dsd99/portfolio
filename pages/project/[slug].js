import { useRouter } from "next/router"
import {db} from "../../firebase/FirebaseConfig"
import {doc, getDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import ProjectDetails from "../../components/projects/ProjectDetails"


const Project = () => {

  const [project, setProject] = useState({
    order: "",
    title: "",
    description: "",
    tags: "",
    inspiration: "",
    features: "",
    improvement: ""
  })

  const router = useRouter()

  const {slug} = router.query

  const getProjectDoc = async () => {
    if (slug) {
      const projectDoc = doc(db, "projects", slug)
      const data = await getDoc(projectDoc)
      setProject({...data.data(), id: data.id})
      // console.log(data.data())
    }
  }

  useEffect(() => {
    getProjectDoc()
  }, [])

  return (
    <div>
      <ProjectDetails key={project.id} project={project} />
    </div>
  )
}

export default Project