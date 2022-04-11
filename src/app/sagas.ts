import { fork } from 'redux-saga/effects'

import {jsopnPlaceholderSaga} from './../features/jsonplaceholder/jsonplaceholderSaga';

//A root Saga aggregates multiple Sagas to a single entry point for the sagaMiddleware to run
// Call redux saga handlers and keep watching in background
export default function* rootSaga() {
    yield fork(jsopnPlaceholderSaga);
    //yield fork(saga2)
    //yield fork(saga3)
    // code after fork-effect
}