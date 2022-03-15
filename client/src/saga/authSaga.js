import { takeLatest } from "@redux-saga/core/effects";
import { message } from "antd";
import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "utils/contants";

export function* userLoginRequest(params) {
    yield axios.post(`${apiUrl}/auth/login`, params.payload)
        .then(res => {
            if (res.data.success) {
                message.success(res.data.message);
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.data.accessToken)
            }
        }).catch(error => {
            if (error.response.data) return message.error(error.response.data.message);
            else return { success: false, message: error.message };
        })
}

export default function* authSaga() {
    yield takeLatest('USER_LOGIN_REQUEST', userLoginRequest);
}