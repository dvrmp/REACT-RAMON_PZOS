import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { applicationMiddleware } from '../middlewares/index';
import { applicationReducers } from '../redux/reducers/index';

export const applicationStore = ()=> {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware  = createSagaMiddleware();
    const store = createStore(combineReducers(applicationReducers),composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(applicationMiddleware);
    return store;
}