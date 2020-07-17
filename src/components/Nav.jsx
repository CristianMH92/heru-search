import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Nav () {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Link to="/top">
                <h1>Top Gifs</h1>
            </Link>
            <Navbar.Brand>
            </Navbar.Brand>
        </Container>
        </Navbar>
    )
}