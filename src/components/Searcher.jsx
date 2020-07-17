import React from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Menu () {
    return(
        <>
         <Container className="mt-5">
         <Row className="justify-content-md-center">
            <Col xs={12} sm={6} md={6}>
                <Form.Group controlId="inputWord">
                    <Form.Control type="text" placeholder="Search" />
                </Form.Group>
                <Link to="/">
                    <Button variant="primary">Buscar</Button>
                </Link>
            </Col>
         </Row>
      </Container>
        </>
    )
}