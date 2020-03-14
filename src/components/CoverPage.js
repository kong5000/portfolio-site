import React from 'react'
import Container from 'react-bootstrap/Container'
import NavigationBar from './NavigationBar'

const CoverPage = () => {
    return (
        <div class="text-center cover-page">
            <NavigationBar/>
            <Container className="cover-page-content">
                <h1 className="title">Keith Ong</h1>
                <p className="lead">A former electrical engineer who wants to code</p>
                <i className="fas fa-charging-station fa-7x icon"></i>
                <i className="fas fa-arrow-right fa-7x icon"></i>
                <i className="fas fa-laptop-code fa-7x icon"></i>
            </Container>
            <div>
        CONTENT CONTENT
      </div>
        </div>
    )
}

export default CoverPage