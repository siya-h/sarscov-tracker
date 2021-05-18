import axios from 'axios'
import { all, call, put, takeEvery } from 'redux-saga/effects'

export function* getDataRequest(){
    try {
        // yield put({type: 'loading'})
        const { data } = yield call(() => axios.get('https://api.covid19api.com/live/country/south-africa/status/confirmed'))
        yield put({type: 'DATA_REQUEST_SUCCESS', payload: data})

    }
    catch(error){
        console.log(error)
    }
    finally{
        yield put({type: 'notLoading'})
    }
}

export function* watchGetDataRequest(){
    yield takeEvery('getData',  getDataRequest)
}

export function* rootSaga() {
    yield all([
        getDataRequest()
    ])
  }