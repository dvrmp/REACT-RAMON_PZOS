import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as characterSelectedTypes from '../redux/action-types/character-selected.action-types';
import { routes } from '../enviroments/routes';

export function* checkCharacterDeathMiddleware(){
    yield spawn(watchGetCharacterDeathAsyns);
}

function* watchGetCharacterDeathAsyns(){
    yield takeEvery(characterSelectedTypes.CHECKING_CHARACTER_DEATH, getDeathByEpisode);
}

function* getDeathByEpisode(action){
    try{
        const responseDeaths = yield call(axios.get,routes.DEATHS.LIST_ALL_DEATHS);
        const responseEpisodes = yield call(axios.get,routes.EPISODES.GET_ALL_EPISODES);
        const deathCharacter = responseDeaths.data.filter((death)=>death.death===action.payload.character);
        const responseDountDeathsCharacter = yield call(axios.get,routes.DEATHS.GET_COUNT_DEATHS+action.payload.character);
        const episodeDeathCharacter = responseEpisodes.data.
        filter((episode)=>episode.season===deathCharacter[0].season.toString() && episode.episode===deathCharacter[0].episode.toString())[0];
        yield put({type: characterSelectedTypes.CHECKED_CHARACTER_DEATH_SUCCESS, payload:{
            episodeDeath: episodeDeathCharacter,
            countDeath : responseDountDeathsCharacter.data[0].deathCount
        }});
    }catch(error){
        yield put({type: characterSelectedTypes.CHECKED_CHARACTER_DEATH_FAILED, payload: error});
    }
}