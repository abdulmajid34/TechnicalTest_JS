import {
    // SET_GRAPH,
    SET_ERROR,
    SET_LOADING,
    TABLE_DATA
} from '../actions/actionType'

const initialState = {
    tableData: {},
    graphData: [],
    loading: false,
    error: null
}

function reducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case TABLE_DATA:
            console.log(payload, 'BERHASIL PAYLOAD');
            return { ...state, tableData: payload  }
        case SET_LOADING:
            return { ...state, loading: payload }
        case SET_ERROR:
            return { ...state, error: payload }
        default:
            return state
    }
}

export default reducer