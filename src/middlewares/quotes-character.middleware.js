import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as quotesTypes from '../redux/action-types/quote-actions.types';
import { routes } from '../enviroments/routes';

export function* getQuotesCharactermiddleware(){
    yield spawn(watchGetQuotesCharacterAsync);
}

function* watchGetQuotesCharacterAsync(){
    yield takeEvery(quotesTypes.CALLING_QUOTES_CHARACTER, getQuotes );
}

function* getQuotes(action){
    try{
        const response = yield call(axios.get,routes.QUOTE.GET_QUOTE_BY_AUTHOR+action.payload.character);
        console.log('QUOTES CHARACTER',response.data)
        yield put({type: quotesTypes.CALLED_QUOTES_CHARACTER_SUCCESS, payload:response.data});
    }catch(error){
        yield put({type: quotesTypes.CALLED_QUOTES_CHARACTER_FAILED, payload: error});
    }
}