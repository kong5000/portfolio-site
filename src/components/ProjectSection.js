import React from 'react'
import ProjectCard from './ProjectCard'
import gameImage from '../assets/game.png'

const ProjectSection = () => (
    <div className="project-section">
        <h2 id="projects-header">PROJECTS</h2>
                <ProjectCard
                    image={gameImage}
                    title="Android Game"
                    text="A retro sidescroller mobile game"
                    skills={[
                        "Java", "Android", "Game Design"
                    ]}
                />


                <ProjectCard
                    image={gameImage}
                    title="Blog Site"
                    text="A simple site where users can sign up to post text blogs and comment on posts. This project started as an exercise for the Full Stack Open course 
                    offered by the University of Helsinki. It helped me learn some of the basics of the backend"
                    skills={[
                        "Node.js", "React", "Redux", "MongoDB"
                    ]}
                />

                <ProjectCard
                    image={gameImage}
                    title="Portfolio Site"
                    text="My personal website I built to showcase my projects and to learn the basics of frontend development"
                    skills={[
                        "React", "CSS", "Bootstrap", "HTML"
                    ]}
                />

    </div>
)

export default ProjectSection