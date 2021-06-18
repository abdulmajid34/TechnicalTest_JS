import axios from 'axios'
import {
    SET_ERROR,
    SET_LOADING,
    TABLE_DATA
} from './actionType'

export function dataMovies(payload) {
    console.log(payload, 'INI DARI ACTION ');
    return { type: TABLE_DATA, payload: payload }
}
export function setLoading(payload) {
    return { type: SET_LOADING, payload: payload }
}
export function setError(payload) {
    return { type: SET_ERROR, payload: payload }
}

export function postLogin(email, password) {
    return axios({
        method: 'post',
        url: 'https://ayodhya-dev.qlue.id/api/auths/login',
        data: {
            email: email,
            password: password,
            fcm_token: '123'
        }
    })
    .then((response) => {
        console.log(response, 'INI DATA NYA');
        localStorage.setItem('id', response.data.profile.id)
        localStorage.setItem('access_token', response.data.token.access_token)
    })
    .catch((err) => {
        console.log(err);
    })
}

export function fetchDataCovid() {
    return (dispatch) => {
        dispatch(setLoading(true))
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=88bd736dd382b7b9688a1d6eaba2b7cc&language=en-US&page=')
        .then((response) => response.json())
        .then((data) => {
            console.log(data, 'ini dari action ');
            dispatch(dataMovies(data.results))
        })
        .catch((err) => {
            console.log(err);
            dispatch(setError(err))
        })
        .finally((_) => {
            dispatch(setLoading(false))
        })
    }
}