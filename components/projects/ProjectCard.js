import Link from 'next/link'
import React, {useContext} from 'react'
import ButtonFill from '../buttons/ButtonFill'
import ButtonOutline from '../buttons/ButtonOutline'
import Tag from '../tags/Tag'
import TagGroup from '../tags/TagGroup'

export default function ProjectCard({project}) {


    const [isHovering, setIsHovering] = React.useState(false)

    function handleMouseOver() {
        setIsHovering(true)
    }

    function handleMouseOut() {
        setIsHovering(false)
    }

    const style = {
        wrapper: `relative outline-teal p-7 lg:px-12`,
        cardTitleSpan: `text-teal-500 font-light text-6xl mr-4 absolute -top-10`,
        cardActions: `flex flex-col lg:flex-row gap-4`,
        cardOverlay: `absolute inset-0 hover:bg-teal-800 flex items-center justify-center`
    }

    return (
            <div className={style.wrapper}>
                <h3>
                    {!isHovering && <span className={style.cardTitleSpan}>0{project.order}</span>}
                    {project.title}
                </h3>
                <p className={style.cardText}>{project.description}</p>  
                    <TagGroup>
                        {project.tags?.split(",").map(item => <Tag key={item}>{item}</Tag>)}
                    </TagGroup>
                <div 
                    className={style.cardOverlay}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                {isHovering &&
                    <div className={style.cardActions}>
                        <Link href={"/project/" + project.id}>
                            <ButtonFill>See details</ButtonFill>
                        </Link>
                        <Link href={project.demoLink} target={"_blank"}>
                            <ButtonOutline>View demo</ButtonOutline>
                        </Link>
                    </div>
                }
                </div>
            </div>
    )
}