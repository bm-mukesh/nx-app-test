/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { Auth } from "aws-amplify";
import {
    Button,
    Checkbox,
    FileInput,
    Label,
    Radio,
    RangeSlider,
    Select,
    Textarea,
    TextInput,
    ToggleSwitch,
} from 'flowbite-react';
import customTheme from '../../flowbiteTheme';
//REDUX
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import * as AuthActionCreators from "../../state/auth/authAc";
import { RootState } from "../../state";
 
export function SignIn() {
    const isLoggedIn = useSelector((state: RootState) => state.auth.idToken !== null ? true : false);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const {  loginRequest } = bindActionCreators(AuthActionCreators, dispatch);
    const testSignIn = (event: any) => {
        event.preventDefault();
        loginRequest({
            username: email,
            password,
        })
    }

    const signIn = (event: any) => {
        event.preventDefault();
        Auth.signIn({
            username: email,
            password,
        })
            .then((user: string) => {
                setEmail("");
                setPassword("");
                console.log(user);
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    return (
        <div className="form">
            <h3>Sign In</h3>
            {/* 
            <form>
                 <input
                    id="sign-in-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                 <input
                    id="sign-in-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
                 <button type="submit" onClick={signIn}>
                    Sign In
                </button>
            </form> 
            */}
             <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="sign-in-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="sign-in-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />
                </div>
                 <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                 {/* <Button  type="submit" onClick={signIn}>Submit</Button> */}
                 <Button  type="submit" onClick={ testSignIn }>Submit</Button>

            </form>
        </div>
    )
}
export default SignIn