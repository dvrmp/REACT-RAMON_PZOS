export const URL_BASE_API_SERVER = 'https://www.breakingbadapi.com/api/';

export const routes = {
    EPISODES:{
        GET_ALL_EPISODES: URL_BASE_API_SERVER + 'episodes/?serie=Breaking+Bad',
    },
    QUOTE:{
        GET_QUOTE_BY_AUTHOR: URL_BASE_API_SERVER + 'quote?author='
    }
}