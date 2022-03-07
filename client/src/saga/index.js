
import { all } from '@redux-saga/core/effects'
import authSaga from './authSaga'

export default function* rootSaga(params) {
    yield all([
        authSaga(),
    ])
}