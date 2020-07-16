import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//useDispatch will consume our action
//useSelector will read response array
import { getGifsAction } from '../redux/giphyDucks'
