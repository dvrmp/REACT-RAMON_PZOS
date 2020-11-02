import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as listAllCharactersTypes from '../redux/action-types/list-all-characters.action-types';
import { routes } from '../enviroments/routes';

export function* getAllCharactersMiddleware(){
    yield spawn(watchGetAllCharactersAsync);
}

function* watchGetAllCharactersAsync(){
    yield takeEvery(listAllCharactersTypes.CALLING_ALL_CHARACTERS, getAllCharacters);
}

function* getAllCharacters(action){
    try{
        const response = yield call(axios.get,routes.CHARACTER.LIST_ALL_CHARACTERS);
        yield put({type: listAllCharactersTypes.CALLING_ALL_CHARACTERS_SUCCESS, payload:response.data});
    }catch(error){
        yield put({type: listAllCharactersTypes.CALLING_ALL_CHARACTERS_FAILED, payload: error});
    }
}