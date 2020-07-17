import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//useDispatch will consume our action
//useSelector will read response array
import { getGifsAction } from '../redux/giphyDucks'

export default function Gifs () {
    const dispatch = useDispatch()
    const gifs = useSelector(store => store.gifs.array)
    useEffect ( () => {
        dispatch(getGifsAction())
    }, [])

    return (
        <div>
           
            <Container fluid="md">
            <h1>Top Gifs</h1>
                <Row>
                    <Col>
                    {
                        gifs.map(gif=>(
                            <img
                                key={ gif.id }
                                width={150}
                                height={150}
                                className="mr-5"
                                src={gif.images.original.url}
                                alt="Generic placeholder"
                            />
                        ))
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}