import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Menu () {
    return(
        <>
            <Form.Group controlId="inputWord">
                <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            <Button variant="primary">Buscar</Button>
        </>
    )
}