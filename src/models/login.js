import {NavigationActions} from '../utils'
import {createAction} from '../utils'
import {successToast, loadingToast, failToast} from "../common/toast";
import {getItem, removeItem} from "../utils/storage";
export { NavigationActions } from 'react-navigation'
export default {
    namespace: 'appNS',
    state: {
        isLogin: false,
        userInfo: {
            fulleName: '',
            cellPhone: ''
        },
        loginFailedReason: 'no reason',
        count: 60
    },
    reducers: {
        loginSuccessed(state, {payload}) {
            return {
                ...state,
                isLogin: true,
                userInfo: payload.userInfo
            }
        },
        loginFailed(state, {payload}) {
            return {
                ...state,
                isLogin: false,
                loginFailedReason: payload.loginFailedReason
            }
        },
        logoutSuccess(state, {payload}) {
            return {
                ...state,
                isLogin: false
            }
        }

    },
    effects: {
        * login(payload, {put, call, select}) {

        },
        * logout(payload, {put, call, select}) {

        }
    }
}
