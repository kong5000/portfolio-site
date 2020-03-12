import React from 'react'
import ProjectCard from './ProjectCard'
import gameImage from '../assets/game.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProjectSection = () => (
    <section>
        <h2 id="projects-header">PROJECTS</h2>
        <Row className="card-holder">
            <Col className="col-lg-4">
                <ProjectCard
                    image={gameImage}
                    title="Android Game"
                    text="A retro sidescroller mobile game"
                    skills={[
                        "Java", "Android", "Game Design"
                    ]}
                />
            </Col>
            <Col className="col-lg-4">
                <ProjectCard
                    image={gameImage}
                    title="Android Game"
                    text="A retro sidescroller mobile game"
                    skills={[
                        "Java", "Android", "Game Design"
                    ]}
                />
            </Col>
            <Col className="col-lg-4">
                <ProjectCard
                    image={gameImage}
                    title="Android Game"
                    text="A retro sidescroller mobile game"
                    skills={[
                        "Java", "Android", "Game Design"
                    ]}
                />
            </Col>
        </Row>
    </section>
)

export default ProjectSection