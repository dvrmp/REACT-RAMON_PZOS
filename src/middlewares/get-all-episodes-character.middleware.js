import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as characterSelectedTypes from '../redux/action-types/character-selected.action-types';
import { routes } from '../enviroments/routes';

export function* getEpisodesCharacteriddleware(){
    yield spawn(watchGetEpisodesCharacterAsync);
}

function* watchGetEpisodesCharacterAsync(){
    yield takeEvery(characterSelectedTypes.CALLING_CHARACTER_EPISODES, getEpisodesCharacter);
}

function* getEpisodesCharacter(action){
    try{
        const response = yield call(axios.get,routes.EPISODES.GET_ALL_EPISODES);
        const episodesCharacters = response.data.map((episode)=>{
            const character = episode.characters.find((c)=>c===action.payload.character);
            if(character!==undefined && character!==null && episode.series==="Breaking Bad"){
               return episode
            }
        }).filter((episode)=>episode!==undefined);
        yield put({type: characterSelectedTypes.CALLED_CHARACTER_EPISODES_SUCCESS, payload:episodesCharacters});
    }catch(error){
        yield put({type: characterSelectedTypes.CALLED_CHARACTER_EPISODES_FAILED, payload: error});
    }
}