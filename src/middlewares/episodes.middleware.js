import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as episodesTypes from '../redux/action-types/episodes.action-types';
import { routes } from '../enviroments/routes';

export function* getEpisodesMiddleware(){
    yield spawn(watchGetEpisodesAsync);
}

function* watchGetEpisodesAsync(){
    yield takeEvery(episodesTypes.CALLING_EPISODES, getEpisodes);
}

function* getEpisodes(action){
    try{
        const response = yield call(axios.get,routes.EPISODES.GET_ALL_EPISODES);
        const episodes = response.data.filter((episode)=>episode.series==="Breaking Bad");
        yield put({type: episodesTypes.CALLED_EPISODES_SUCCESS, payload:{
            episodes: episodes,
            season_selected: action.payload
        }});
    }catch(error){
        yield put({type: episodesTypes.CALLED_EPISODES_FAILED, payload: error});
    }
}