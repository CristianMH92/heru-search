import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
//thunk serve to create pomises with redux
import thunk from 'redux-thunk'
import giphyReducer from './giphyDucks'

const rootReducer = combineReducers ({
    gifs: giphyReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default function generateStore() {
    const store = createStore( rootReducer,  composeEnhancers(applyMiddleware(thunk) ) )
    return store
}