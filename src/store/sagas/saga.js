import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { dataRequestError, dataRequestLoading, dataRequestSuccess, WATCH_ACTIONS } from '../actions/actions'

export function* getDataRequest() {
    try {
        yield put(dataRequestLoading())
        const { data } = yield call(() => axios.get(process.env.REACT_APP_SA_CONFIRMED_LIVE_ALL))
        yield put(dataRequestSuccess(data))
    }
    catch (error) {
        yield put(dataRequestError(error))
        console.log(error)
    }
}

export function* watchGetDataRequest() {
    yield takeEvery(WATCH_ACTIONS.GET_DATA, getDataRequest)
}

export function* rootSaga() {
    yield all([
        getDataRequest()
    ])
}