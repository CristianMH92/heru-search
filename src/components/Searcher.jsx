import React, {useState} from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchWordAction } from '../redux/giphyDucks'

export default function Menu () {
    const dispatch = useDispatch()
    const [wordInput, setWordInput] = useState('')

    return(
        <>
         <Container className="mt-5">
         <Row className="justify-content-md-center">
            <Col xs={12} sm={6} md={6}>
                <Form.Group controlId="inputWord">
                    <Form.Control 
                        type="text" 
                        placeholder="Search" 
                        onChange={(e) => setWordInput(e.target.value)}
                    />
                </Form.Group>
                <Link to="/search">
                    <Button
                        variant="primary"
                        onClick={ () => dispatch( searchWordAction( wordInput ) ) }
                    >
                        Buscar
                    </Button>
                </Link>
            </Col>
         </Row>
      </Container>
        </>
    )
}