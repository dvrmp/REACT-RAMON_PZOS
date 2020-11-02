import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as killerTypes from '../redux/action-types/killers.action-types';
import { routes } from '../enviroments/routes';

export function* getKillersMiddleware(){
    yield spawn(watchGetKillersMiddlewareAsync);
}

function* watchGetKillersMiddlewareAsync(){
    yield takeEvery(killerTypes.CALLING_KILLERS, getKillers);
}

function* getKillers(action){
    try{
        const responseDeath = yield call(axios.get,routes.DEATHS.LIST_ALL_DEATHS);
        const responseCharacters = yield call(axios.get,routes.CHARACTER.LIST_ALL_CHARACTERS);
        const charactersKillers = [];
        responseCharacters.data.map((character)=>{
            const deathsByCharacter = responseDeath.data.filter((death)=>death.responsible===character.name);
            if(deathsByCharacter.length>0 ){
                const killerOnArray = charactersKillers.find((killer)=>killer.responsible === character.name);
                if(killerOnArray===null || killerOnArray===undefined){
                    charactersKillers.push(character.name);
                }
            }
        })
        const deathsByKiller = [];
        for (let index = 0; index < charactersKillers.length; index++) {
            const responseCountDeath = yield call(axios.get,routes.DEATHS.GET_COUNT_DEATHS+charactersKillers[index]);
            deathsByKiller.push(responseCountDeath.data[0]);
        }
        deathsByKiller.sort((a,b)=>{ 
            if(a.deathCount>b.deathCount){
                return 1;
            }
            else{
                return -1;
            }
        })
        deathsByKiller.reverse();
        yield put({type: killerTypes.CALLED_KILLERS_SUCCESS, payload:deathsByKiller});
    }catch(error){
        yield put({type: killerTypes.CALLED_KILLERS_FAILED, payload: error});
    }
}