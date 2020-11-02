import { spawn } from 'redux-saga/effects';
import { getEpisodesMiddleware } from './episodes.middleware';
import { getQuoteEpisodeMiddleware } from './quote-episode.middleware';
import { getCharactersDeathEpisodeMiddleware } from './check-deaths-episode.middleware';
import { getCharacterMiddleware } from './get-character.middleware';
import { checkCharacterDeathMiddleware } from './check-character-death.middleware';
import { getEpisodesCharacteriddleware } from './get-all-episodes-character.middleware';
import { getQuotesCharactermiddleware } from './quotes-character.middleware';
import { getKillersMiddleware } from './killers.middleware';
import { getAllCharactersMiddleware } from './get-all-characters.middleware';

export function* applicationMiddleware() {
    yield spawn(getEpisodesMiddleware);
    yield spawn(getQuoteEpisodeMiddleware);
    yield spawn(getCharactersDeathEpisodeMiddleware);
    yield spawn(getCharacterMiddleware);
    yield spawn(checkCharacterDeathMiddleware);
    yield spawn(getEpisodesCharacteriddleware);
    yield spawn(getQuotesCharactermiddleware);
    yield spawn(getKillersMiddleware);
    yield spawn(getAllCharactersMiddleware);

}