import { put, call, takeLatest } from 'redux-saga/effects'
import { START_GET_GIFS, SUCCESS_GET_GIFS} from '../giphyDucks'
import apiCall from '../api/index'
export function* getGifs( { payload } ) {
    try {
        const results = yield call(apiCall, 'get', 'https://api.giphy.com/v1/stickers/trending?api_key=AUfMW8slOkzJFnZQvYMglqs0osrUvBOb&limit=25&rating=g')
        // results.map(res => {
        //     console.log(res)
        // })
        yield put( { type: SUCCESS_GET_GIFS, results })
    } catch (error) {
        console.log(error)
    }
} 

//Watcher
export default function* gifsWatcherGet() {
    yield takeLatest(START_GET_GIFS, getGifs)
}