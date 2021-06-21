import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../store/sagas/saga';
import { dataReducer } from './reducers/reducers';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    data: dataReducer,
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store