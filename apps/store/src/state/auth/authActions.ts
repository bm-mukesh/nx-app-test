import { AuthActionType } from "../auth/actionType"

interface checkAuthorizationAction {
    type: AuthActionType.CHECK_AUTHORIZATION
    payload: any
}
interface loginAction {
    type: AuthActionType.LOGIN_REQUEST
    payload: any
}
interface logoutAction {
    type: AuthActionType.LOGOUT
    payload: any
}
interface loginSuccessAction {
    type: AuthActionType.LOGIN_SUCCESS
    payload: any
}
interface loginErrorAction {
    type: AuthActionType.LOGIN_ERROR
    payload: any
}
export type AuthAction = checkAuthorizationAction | loginAction | logoutAction | loginSuccessAction | loginErrorAction 
