import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

const HomepageHero = () => (
    <Jumbotron fluid id="home-hero" className="text-center">
        <Container>
            <h1 class="title">Keith Ong</h1>
            <p class="lead">A former electrical engineer who wants to code</p>
            <i class="fas fa-charging-station fa-7x icon"></i>
            <i class="fas fa-arrow-right fa-7x icon"></i>
            <i class="fas fa-laptop-code fa-7x icon"></i>
        </Container>
    </Jumbotron>
)

export default HomepageHero