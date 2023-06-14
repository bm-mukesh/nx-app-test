/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Auth } from "aws-amplify";
import {
    Button,
    Checkbox,
    Label,
    TextInput,
} from 'flowbite-react';

//REDUX
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as AuthActionCreators from "../../state/auth/authAc";
import { Link } from 'react-router-dom';

export function SignIn() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginRequest } = bindActionCreators(AuthActionCreators, dispatch);

    const testSignIn = (event: any) => {
        event.preventDefault();
        loginRequest({
            username: email,
            password,
        })
    } 

    return (
        <div className="form">
            <h3>Sign In</h3>
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
                <Button type="submit" onClick={testSignIn}>Submit</Button>
                <Link to='/signUp'>Create account</Link>
            </form>
        </div>
    )
}
export default SignIn