import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as deathsTypes from '../redux/action-types/deaths.action.types';
import { routes } from '../enviroments/routes';

export function* getCharactersDeathEpisodeMiddleware(){
    yield spawn(watchGetCharacterDeathAsyns);
}

function* watchGetCharacterDeathAsyns(){
    yield takeEvery(deathsTypes.CALLING_DEATHS, getDeaths);
}

function* getDeaths(action){
    try{
        const response = yield call(axios.get,routes.DEATHS.LIST_ALL_DEATHS);
        let charactersDeaths = response.data.map((_death)=>{
           for(let index=0; index<action.payload.characters.length; index++){
                if(action.payload.characters[index]===_death.death && _death.episode=== parseInt(action.payload.episode)){
                    return _death
                }
           }
        }).filter((death)=>death!==undefined);
        yield put({type: deathsTypes.CALLED_DEATHS_SUCCESS, payload:charactersDeaths});
    }catch(error){
        yield put({type: deathsTypes.CALLED_DEATHS_FAILED, payload: error});
    }
}