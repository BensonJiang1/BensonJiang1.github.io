import React from "react"
import ProjectCard from "../sub/ProjectCard"
import { Projects_list } from "@/constants"

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col items-center  md:flex-row gap-10 justify-center px-10">
        {Projects_list.map((project, index) => (
          <ProjectCard
          key={'p'+index}
          src={project.src}
          title={project.title}
          description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects