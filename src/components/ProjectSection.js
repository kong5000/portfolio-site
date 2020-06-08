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
                    githubLink={'https://github.com/kong5000/stock-tracker-frontend'}
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
                    githubLink={'https://github.com/kong5000/Android-Sidescroller-Game'}

                />
                <ProjectCard
                    image={blogAppImage}
                    title="PostAp"
                    text="A simple site where users can sign up to make text posts and comment and vote on them. This project started as an exercise for the Full Stack Open course 
                    offered by the University of Helsinki. It helped me learn some of the basics of backend development"
                    skills={[
                        "Node.js", "React", "Redux", "MongoDB"
                    ]}
                    githubLink={'https://github.com/kong5000/blog-list-front'}
                    demoLink={'https://post-ap-frontend.web.app/'}
                />
                <ProjectCard
                    image={mySiteImage}
                    title="Portfolio Site"
                    text="My personal website I built to showcase my projects and to learn the basics of frontend development"
                    skills={[
                        "React", "CSS", "Bootstrap", "HTML"
                    ]}
                    githubLink={'https://github.com/kong5000/portfolio-site'}
                />
    </div>
)

export default ProjectSection