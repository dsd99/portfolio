import Link from 'next/link'
import React from 'react'

const ProjectDetails = ({project}) => {
    const style = {
        card: `flex flex-col gap-8 mx-auto w-full lg:w-7/12 p-8 text-left mt-8`,
        cardTitle: `text-3xl sm:text-5xl font-bold mb-2`,
        cardDate: `text-lg opacity-60 font-normal`,
        cardBody: `flex flex-col gap-8`,
        cardSection: `flex flex-col gap-4 items-start mb-2`,
        cardSectionTitle: `font-bold text-2xl sm:text-3xl opacity-90`,
        projectFeature: `list-disc pl-6`,
        projectStatus: `flex items-center justify-center w-fit rounded-full px-2.5 py-0.5 bg-teal-600 hover:bg-teal-500`,
        projectTechnology: `flex w-fit rounded-full px-2.5 py-0.5 bg-gray-700 hover:bg-gray-600`,
        projectLink: `flex w-fit rounded-full px-2.5 py-0.5 bg-teal-800 hover:bg-teal-600`,
        flexContainer: `flex flex-wrap gap-4`
    }

    return (
        <div className={style.card}>

            <Link href={"/#projects"}>
                <h4 className='underline text-xl'><i className='bx bx-left-arrow-alt mr-1'></i>Return</h4>
            </Link>
            <div>
                <h2 className={style.cardTitle}>{project.title}</h2>
                <p className={style.cardDate}>Posted on Oct 22, 2022</p>     
            </div>
            <div className={style.cardBody}>

                {project.imageLink && <div className={style.cardSection}>
                    <Link href={project.demoLink} target={'_blank'}>
                        <img
                            src={project.imageLink}
                            alt={`Image for ${project.title}`}
                            width={450}
                            height={150}
                            className="rounded-2xl border border-zinc-700 my-2 object-cover"
                        />
                    </Link>
                </div>}
                
                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Intro</h4>
                    <p className={style.cardText}>{project.description}</p>
                    <div className={style.flexContainer}>
                        {project.demoLink && <Link href={project.demoLink} className={style.projectLink} target={'_blank'}>Demo</Link>}
                        {project.sourceCode && <Link href={project.sourceCode} className={style.projectLink} target={'_blank'}>Source code</Link>}
                    </div>
                </div>  

                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Inspiration</h4>
                    <p className={style.cardText}>{project.inspiration}</p>
                </div>

                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Features</h4>
                    <ul className={style.projectFeature}>{project.features?.split("-").map(feature => (
                        <li key={feature}>{feature}</li>
                    ))}</ul>
                </div>

                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Technologies</h4>
                    <div className={style.flexContainer}>
                        {project.tags?.split(",").map(technology => (
                            <div key={technology} className={style.projectTechnology}>
                                {technology}
                            </div>
                        ))}
                    </div>

                    <ul className={style.projectFeature}>{project.tools?.split("-").map(tool => (
                        <li key={tool}>{tool}</li>
                    ))}</ul>
                </div>

                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Reflections</h4>
                    <p className={style.cardText}>{project.reflections}</p>
                </div>

                <div className={style.cardSection}>
                    <h4 className={style.cardSectionTitle}>Future work</h4>
                    <ul className={style.projectFeature}>{project.improvement?.split("-").map(feature => (
                        <li key={feature}>{feature}</li>
                    ))}</ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails