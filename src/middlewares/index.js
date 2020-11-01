import { spawn } from 'redux-saga/effects';
import { getEpisodesMiddleware } from './episodes.middleware';
import { getQuoteEpisodeMiddleware } from './quote.middleware';
import { getCharactersDeathEpisodeMiddleware } from './check-deaths-episode.middleware';
import { getCharacterMiddleware } from './get-character.middleware';
import { checkCharacterDeathMiddleware } from './check-character-death.middleware';

export function* applicationMiddleware() {
    yield spawn(getEpisodesMiddleware);
    yield spawn(getQuoteEpisodeMiddleware);
    yield spawn(getCharactersDeathEpisodeMiddleware);
    yield spawn(getCharacterMiddleware);
    yield spawn(checkCharacterDeathMiddleware);
}