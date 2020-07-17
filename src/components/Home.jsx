import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { getRandomGifsAction } from '../redux/giphyDucks'
import { useDispatch, useSelector } from 'react-redux'

export default function Home () {
   const dispatch = useDispatch()
   const searchs = useSelector(store => store.gifs.arrayHome)
   useEffect ( () => {
      dispatch(getRandomGifsAction())
  }, [])
   return (
      <>
      <Container>
         <h1>Home</h1>
         <Row>
                    <Col>
                    {
                        searchs.map(search=>(
                            <img
                                key={ search.id }
                                width={150}
                                height={150}
                                className="mr-5"
                                src={search.featured_gif.images.original.url}
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