import React from 'react'
import ProjectCard from './ProjectCard'
import gameImage from '../assets/game.png'
import blogAppImage from '../assets/blog_app.JPG'
import mySiteImage from '../assets/my_site.JPG'
import stockAppImage from '../assets/stock_app.JPG'

const ProjectSection = () => (
    <div id="projects-section" className="project-section">
        <h2 id="projects-header">PROJECTS</h2>
                <ProjectCard
                    image={stockAppImage}
                    title="BeanStock"
                    text="A site where you can track your stock allocation and receive alerts when they go out of your target weighting. Built with React and Node.js"
                    skills={[
                        "React", "CSS", "Bootstrap", "HTML"
                    ]}
                    githubLink={'https://github.com/kong5000/stock-tracker'}
                    demoLink={'https://beanstocktracker.firebaseapp.com/'}
                />
                <ProjectCard
                    image={gameImage}
                    title="Mobile Game"
                    text="A retro sidescroller game made with Java and libgdx for Android.
                    I pursued this project to learn about object oriented programming and mobile development and hope to one day polish and release it."
                    skills={[
                        "Java", "Android", "Game Design"
                    ]}
                />
                <ProjectCard
                    image={blogAppImage}
                    title="Blog Site"
                    text="A simple site where users can sign up to post text blogs and comment on posts. This project started as an exercise for the Full Stack Open course 
                    offered by the University of Helsinki. It helped me learn some of the basics of the backend"
                    skills={[
                        "Node.js", "React", "Redux", "MongoDB"
                    ]}
                />
                <ProjectCard
                    image={mySiteImage}
                    title="Portfolio Site"
                    text="My personal website I built to showcase my projects and to learn the basics of frontend development"
                    skills={[
                        "React", "CSS", "Bootstrap", "HTML"
                    ]}
                />
    </div>
)

export default ProjectSection