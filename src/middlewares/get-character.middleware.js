import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as characterSelectedTypes from '../redux/action-types/character-selected.action-types';
import { routes } from '../enviroments/routes';

export function* getCharacterMiddleware(){
    yield spawn(watchGetCharacterAsync);
}

function* watchGetCharacterAsync(){
    yield takeEvery(characterSelectedTypes.CALLING_CHARACTTER, getCharacter);
}

function* getCharacter(action){
    try{
        const response = yield call(axios.get,routes.CHARACTER.GET_CHARACTER+action.payload);
        console.log('response character',response.data)
        yield put({type: characterSelectedTypes.CALLED_CHARACTER_SUCCESS, payload:response.data[0]});
    }catch(error){
        yield put({type: characterSelectedTypes.CALLED_CHARACTER_FAILED, payload: error});
    }
}