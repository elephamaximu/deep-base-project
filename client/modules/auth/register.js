import {createAction, handleActions} from 'redux-actions'
import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import {SERVER, headers} from "@/modules/auth/server"

// 상태 초기값
export const initialstate = {
    isRegistered: false
}

// 액션타입
const REGISTER_REQUEST = 'auth/REGISTER_REQUEST'
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE'

// 액션생성함수
export const registerRequest = createAction(REGISTER_REQUEST, data => data)

// 사가 와쳐
export function* registerSaga() {
    yield takeLatest(REGISTER_REQUEST, signup)
}

// 사가 로직
function* signup(action) {
    try {
        console.log(" **** 여기가 핵심 *** " + JSON.stringify(action))
        const response = yield call(registerAPI, action.payload)
        console.log(" 회원가입 서버다녀옴: " + JSON.stringify(response.data))
        yield put({type: REGISTER_SUCCESS, payload: response.data})
        yield put((window.location.href = "/auth/login"));
    } catch (error) {
        yield put({type: REGISTER_FAILURE, payload: error.message})
    }
}

// API
const registerAPI = payload => axios.post(
    `${SERVER}/user/join`,
    payload,
    {headers}
)

// 리듀서

const register = (state = initialstate, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {}
        case REGISTER_FAILURE:
            return {}
        default:
            return state
    }
}
export default register