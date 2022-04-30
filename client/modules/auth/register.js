import {createAction, handleActions} from 'redux-actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios'
import {SERVER, headers} from "@/modules/auth/server"

// 상태 초기값
export const initialstate = {}

// 액션타입
const REGISTER_REQUEST = 'auth/REGISTER_REQUEST'

// 액션생성함수
export const registerRequest = createAction(REGISTER_REQUEST, data => data)

// 사가 와쳐
export function* registerSaga() {}

// 사가 로직
function* signup(action) {
    try {} catch (error) {
        yield put({})
    }
}

// API
const registerAPI = payload => axios.post()

// 리듀서

const register = (state = initialstate, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default register