import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProjectCard = (props) => (
    <Card className="project-card">
        <img
            alt="project thumbnail"
            src={props.image}
            className="card-image  d-md-block">
        </img>
        <div class="card-body">
            <h3 class="mb-0">
                <p >{props.title}</p>
            </h3>
            <p class="card-text mb-auto">{props.text}</p>
            <div class="button-holder">
                <Button className="card-button">Github</Button>
                <Button className="card-button">Demo</Button>
            </div>
        </div>
    </Card>
)
export default ProjectCard
