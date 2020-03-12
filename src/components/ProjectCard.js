import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProjectCard = ( props ) => (
    <Card style={{ width: '18rem' }} className="project-card">
        <Card.Img variant="top" src={props.image} className="card-image"/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <Button variant="primary">Github</Button>
            <Button variant="primary">Site</Button>
        </Card.Body>
    </Card>
)
export default ProjectCard