import { spawn } from 'redux-saga/effects';
import { getEpisodesMiddleware } from './episodes.middleware';

export function* applicationMiddleware() {
    yield spawn(getEpisodesMiddleware);
}