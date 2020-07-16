import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//useDispatch will consume our action
//useSelector will read response array
import { getGifsAction } from '../redux/giphyDucks'

export default function Gifs () {
    const dispatch = useDispatch()
    const gifs = useSelector(store => store.gifs.array)

    return (
        <div>
            Lista de Gifs
            <button onClick={() => dispatch(getGifsAction())}>Buscar</button>
            <ul>
                {
                    gifs.map(gif=>(
                        <li key={ gif.id }> { gif.type } </li>
                    ))
                }
            </ul>
        </div>
    )
}