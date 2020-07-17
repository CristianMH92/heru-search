import { all } from 'redux-saga/effects'
import gifsWatcherGet from './gifs'
export default function* rootSaga() {
    yield all (
        [
            gifsWatcherGet()
        ]
    )
}