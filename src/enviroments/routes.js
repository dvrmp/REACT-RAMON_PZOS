export const URL_BASE_API_SERVER = 'https://www.breakingbadapi.com/api/';

export const routes = {
    EPISODES:{
        GET_ALL_EPISODES: URL_BASE_API_SERVER + 'episodes/?serie=Breaking+Bad',
    },
    QUOTE:{
        GET_QUOTE_BY_AUTHOR: URL_BASE_API_SERVER + 'quote?author='
    },
    DEATHS:{
        LIST_ALL_DEATHS: URL_BASE_API_SERVER+'deaths',
        GET_COUNT_DEATHS: URL_BASE_API_SERVER+'death-count?name='
    },
    CHARACTER:{
        GET_CHARACTER: URL_BASE_API_SERVER+'characters?name='
    }
}