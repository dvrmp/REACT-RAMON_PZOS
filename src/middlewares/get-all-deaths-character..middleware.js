// import { spawn, takeEvery, call, put } from 'redux-saga/effects';
// import axios from 'axios';
// import * as deathsTypes from '../redux/action-types/deaths.action.types';
// import { routes } from '../enviroments/routes';

// export function* getDeathsCharacterDeath(){
//     yield spawn(watchGetDeathsCharacterAsync);
// }

// function* watchGetDeathsCharacterAsync(){
//     yield takeEvery(deathsTypes.CALLING_DEATHS, getDeaths);
// }

// function* getDeaths(action){
//     try{
//         const response = yield call(axios.get,routes.DEATHS.LIST_ALL_DEATHS);
//         yield put({type: deathsTypes.CALLED_DEATHS_SUCCESS, payload:charactersDeaths});
//     }catch(error){
//         yield put({type: deathsTypes.CALLED_DEATHS_FAILED, payload: error});
//     }
// }