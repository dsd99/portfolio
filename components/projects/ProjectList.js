import ProjectCard from "./ProjectCard"
import { ProjectContext } from "../../context/ProjectContext"
import { useContext } from "react"

export default function Projects() {

  const {projects} = useContext(ProjectContext)


  const style = {
    gridContainer: `grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-16`
  }
  
  return (
    <div>
      <h2 className='relative'>Projects <span className='watermark'>Projects</span></h2>
      <div className='mt-20'>
        <div className={style.gridContainer}>
          {projects?.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />  
          ))}
        </div>
      </div>
    </div>
  )
}