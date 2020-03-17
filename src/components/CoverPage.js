import React from 'react'
import Container from 'react-bootstrap/Container'
import NavigationBar from './NavigationBar'

const CoverPage = () => {
    return (
        <div class="full-screen text-center cover-page">
            <Container className="cover-page-content">
                <p class="lead-small-screen">Keith Ong</p>
                <p class="lead">Former Electrical Engineer Learning to Code</p>
                <i class="fas fa-charging-station fa-7x icon"></i>
                <i class="fas fa-arrow-right fa-7x icon"></i>
                <i class="fas fa-arrow-down  fa-7x icon"></i>
                <i class="fas fa-laptop-code fa-7x icon"></i>
                <div class="photo-credit">Photo by Alexandre Debiève on Unsplash</div>
            </Container>
        </div>
    )
}

export default CoverPage