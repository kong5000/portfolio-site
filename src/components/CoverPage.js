import React from 'react'
import Container from 'react-bootstrap/Container'
import NavigationBar from './NavigationBar'

const CoverPage = () => {
    return (
        <div class="full-screen text-center cover-page">
            <Container className="cover-page-content">
                <p className="lead">Former Electrical Engineer Learning to Code</p>
                <i className="fas fa-charging-station fa-7x icon"></i>
                <i className="fas fa-arrow-right fa-7x icon"></i>
                <i className="fas fa-laptop-code fa-7x icon"></i>
            </Container>
        </div>
    )
}

export default CoverPage