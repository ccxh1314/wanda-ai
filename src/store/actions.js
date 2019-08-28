import axios from 'axios';
import { UPDATE_RETRIEVAL, UPDATE_SERACHRESULT, UPDATE_ADVANCED } from './types'

export default {
    [UPDATE_RETRIEVAL]: ({ state, commit }, { page, querystring, filters }) => {
        return axios({
            url: 'http://10.1.192.118:9901/search/ptsearch',
            method: 'post',
            data: { page: 1, querystring, filters }
        }).then(
            res => {
                commit(UPDATE_RETRIEVAL, res.data.results)
                return res.data.results;
            }
        )
    },

    [UPDATE_SERACHRESULT]: ({ state, commit }, payload) => commit(UPDATE_SERACHRESULT, payload),

    [UPDATE_ADVANCED]: ({ state, commit }, payload) => commit(UPDATE_ADVANCED, payload),

}