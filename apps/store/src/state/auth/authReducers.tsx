
import { AuthActionType } from "../auth/actionType";
import { AuthAction } from "../auth/authActions";

const initialState = {
    idToken: null,
    error: null
};

const reducer = (state: any = initialState, action: AuthAction): any => {
    switch (action.type) {
        case AuthActionType.LOGIN_SUCCESS:
            return action.payload
        case AuthActionType.LOGIN_ERROR:
            return action.payload
        case AuthActionType.LOGOUT:
            return action.payload
        default:
            return state
    }
}
export default reducer
