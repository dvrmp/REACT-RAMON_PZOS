import { spawn } from 'redux-saga/effects';
import { getEpisodesMiddleware } from './episodes.middleware';
import { getQuoteEpisodeMiddleware } from './quote.middleware';
import { getCharacterDeath } from './check-death.middleware';
export function* applicationMiddleware() {
    yield spawn(getEpisodesMiddleware);
    yield spawn(getQuoteEpisodeMiddleware);
    yield spawn(getCharacterDeath);

}