import {createAction, handleActions} from 'redux-actions'
import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {SERVER, headers} from "@/modules/auth/server"

// 상태 초기값
export const initialstate = {
    loginUser: {},
    loginError: null,
    isLoggined: false,
    token: ''
}

// 액션타입
const LOGIN_REQUEST = 'auth/LOGIN_REQUEST'
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE'
const LOGIN_CANCELLED = 'auth/LOGIN_CANCELLED'
const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST'
const LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS"
const LOGOUT_FAILURE = "auth/LOGOUT_FAILURE"
const SAVE_TOKEN = 'auth/SAVE_TOKEN'
const DELETE_TOKEN = 'auth/DELETE_TOKEN'

// 액션생성함수 -> 외부에서 요청할 수 있는 것만
export const loginRequest = createAction(LOGIN_REQUEST, data => data)
export const loginCancelled = createAction(LOGIN_CANCELLED, e => e)
export const logoutRequest = createAction(LOGOUT_REQUEST, e => e)

// 사가 와쳐 -> 화면만 보는 녀석
export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, signin)
  yield takeLatest(LOGIN_CANCELLED, loginCancelled)
  yield takeLatest(LOGOUT_REQUEST, logout)
}

// 사가 로직
function* signin(action) {
    try {} catch (error) {
        yield put({})
    }
}
function* loginCancelled() {
    try {} catch (error) {
        yield put({})
    }
}
function* logout() {
    try {} catch (error) {
        yield put({})
    }
}

// API
const loginAPI = payload => axios.post()

// 리듀서

const login = (state = initialstate, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default login