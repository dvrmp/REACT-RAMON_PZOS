import { spawn, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as episodeSelectedTypes from '../redux/action-types/episode-selected.action-types';
import { routes } from '../enviroments/routes';

export function* getQuoteEpisodeMiddleware(){
    yield spawn(watchGetQuoteEpisodeAsync);
}

function* watchGetQuoteEpisodeAsync(){
    yield takeEvery(episodeSelectedTypes.CALLING_QUOTE_EPISODE, getQuote );
}

function* getQuote(action){
    try{
        for (let index = 0; index < action.payload.length; index++) {
        let response = yield call(axios.get,routes.QUOTE.GET_QUOTE_BY_AUTHOR+action.payload[index]);
            if(response.data.length>0){
                yield put({type: episodeSelectedTypes.CALLED_QUOTE_EPISODE_SUCCESS, payload:response.data[Math.floor(Math.random()*response.data.length)]});
                break;
            }
        }
    }catch(error){
        yield put({type: episodeSelectedTypes.CALLED_QUOTE_EPISODE_FAILED, payload: error});
    }
}