import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getGifsSearch } from '../redux/giphyDucks'

export default function Result () {
    const dispatch = useDispatch()
    const searchs = useSelector(store => store.gifs.array)
    console.log(searchs)
    useEffect ( () => {
        dispatch(getGifsSearch())
    }, [])
    return(
        <>
        <Container>
            <h1>Resultados</h1>
            <Row>
                    <Col>
                    {
                        searchs.map(search=>(
                            <img
                                key={ search.id }
                                width={150}
                                height={150}
                                className="mr-5"
                                src={search.images.original.url}
                                alt="Generic placeholder"
                            />
                        ))
                    }
                    </Col>
                </Row>
        </Container>
        </>
    )
}