import { AuthActionType, } from "../auth/actionType"
import { Dispatch } from "redux"
import { AuthAction } from '../auth/authActions'
import axios from "axios"
import { Auth } from "aws-amplify";

export const loginRequest = (data: any) => {
    console.log(">>>>>>>>>>", data);
    return async (dispatch: Dispatch<AuthAction>) => {
        Auth.signIn(data)
            .then((user: any) => {
                console.log("user", user);
                return dispatch({
                    type: AuthActionType.LOGIN_SUCCESS,
                    payload: { idToken: user.signInUserSession.idToken.jwtToken }
                })
            })
            .catch((err: any) => {
                console.log("==========>error", err);
                return dispatch({
                    type: AuthActionType.LOGIN_ERROR,
                    payload: { error: err }
                })
            });
        try {
            console.log("loginRequest==========>res");
        } catch (error) {
            console.log("loginRequest==========>error");
        }
    }
}

// event.preventDefault();
// Auth.signIn({
//     username: email,
//     password,
// })
// .then((user: string) => {
//     setEmail("");
//     setPassword("");
//     console.log(user);
// })
// .catch((err: any) => {
//     console.log(err);
// });