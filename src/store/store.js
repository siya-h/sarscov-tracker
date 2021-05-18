import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../store/sagas/saga'
import { createStore, applyMiddleware, combineReducers } from "redux";
import { dataReducer, loadingReducer } from './reducers/reducers';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    data: dataReducer,
    loading: loadingReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store