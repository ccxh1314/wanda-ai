import * as types from './types';

export default {
    [types.UPDATE_RETRIEVAL]: (state, payload) => state.retrieval = payload,
    [types.UPDATE_SERACHRESULT]: (state, payload) => state.searchresult = payload,
    [types.UPDATE_ADVANCED]: (state, payload) => state.advanced = payload,

}