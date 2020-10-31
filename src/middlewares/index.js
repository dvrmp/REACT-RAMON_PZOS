import { spawn } from 'redux-saga/effects';
import { getEpisodesMiddleware } from './episodes.middleware';
import { getQuoteEpisodeMiddleware } from './quote.middleware';

export function* applicationMiddleware() {
    yield spawn(getEpisodesMiddleware);
    yield spawn(getQuoteEpisodeMiddleware);

}