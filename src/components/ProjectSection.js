import React from 'react'
import ProjectCard from './ProjectCard'
import gameImage from '../assets/game.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                    text="A simply blog site I built to learn more about backend development
                    A simply blog site I built to learn more about backend development"
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