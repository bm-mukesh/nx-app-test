/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
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
import { Link } from 'react-router-dom';
const SignInHolder = styled.div`
display:flex;
flex-wrap: nowrap;
flex-direction: column;
align-content: center;
justify-content: center;
align-items: center;
min-height:100vh;
.form{
    width:400px;
}
}
 `;
export function SignUp() {
    const [email, setEmail] = useState("");
    const [phone_number, setPhone_number] = useState(" ");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [waitingForCode, setWaitingForCode] = useState(false);
    const [code, setCode] = useState("");
    const [forgotPassword, setForgotPassword] = useState(false);
    const [signUpSec, setSignUpSec] = useState(false);
    const [codeNewPass, setCodeNewPass] = useState(false);

    // const signUp = (e:any) => {
    //     e.preventDefault();
    //     Auth.signUp({ username: email, password, attributes: { email } })
    //       .then((data) => {
    //         console.log(data);
    //         setWaitingForCode(true);
    //         setPassword("");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };


    const forgotPasswordFun = (event: any) => {
        event.preventDefault();
        // Send confirmation code to user's email
        Auth.forgotPassword(email)
            .then((data: any) => {
                console.log(data)
            })
            .catch((err: any) => {
                console.log(err)
            });
    }

    const forgotPasswordSubmitFun = (event: any) => {
        event.preventDefault();
        // Collect confirmation code and new password, then
        Auth.forgotPasswordSubmit(email, code, newPassword)
            .then((data: any) => {
                console.log(data)
            })
            .catch((err: any) => {
                console.log(err)
            });
    }

    const signUp = (event: any) => {
        event.preventDefault();
        Auth.signUp({ username: email, password, attributes: { email, phone_number } })
            .then((data: any) => { // Replace 'any' with the actual type of 'data' returned by the 'Auth.signUp' promise
                console.log("Sign Up data ========>", data);
                setWaitingForCode(true);
                setPassword("");
            })
            .catch((err: any) => { // Replace 'any' with the actual type of 'err' thrown by the 'Auth.signUp' promise
                console.log(err);
                console.log("Sign Up Error ========>", err);
            });
    };

    const confirmSignUp = (): void => {
        Auth.confirmSignUp(email, code)
            .then(() => {
                // console.log(data);
                setWaitingForCode(false);
                setEmail("");
                setCode("");
            })
            .catch(() => {
                // console.log(err)
            });
    };

    //   const resendCode = () => {
    //     Auth.resendSignUp(email)
    //       .then(() => {
    //         console.log("code resent successfully");
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    //   };

    const resendCode = (): void => {
        Auth.resendSignUp(email)
            .then((): void => {
                console.log("code resent successfully");
            })
            .catch((e: Error): void => {
                console.log(e);
            });
    };

    return (
        <SignInHolder>
            <div className="form">
                <h3>Sign Up page</h3>
                {/* <form className="flex max-w-md flex-col gap-4">
                    <input
                        id="sign-up-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />
                    <button type="button" onClick={forgotPasswordFun}>Forgot password</button>
                </form>
                 <form className="flex max-w-md flex-col gap-4">
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="code"
                    />
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="new password"
                    />
                    <Button type="submit" onClick={forgotPasswordSubmitFun}>Reset password</Button>
                    <Button type="button" onClick={resendCode}>Resend code</Button>
                </form>
   */}

                <br />
                <hr />
                <br />

                {!waitingForCode && (
                    <form className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="sign-up-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Password"
                                />
                            </div>
                            <TextInput
                                id="sign-up-password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value="Phone"
                                />
                            </div>
                            <TextInput
                                id="sign-up-phone"
                                type="phone"
                                value={phone_number}
                                onChange={(e) => setPhone_number(e.target.value)}
                                placeholder="+91 987654321"
                            />
                        </div>
                        <Button type="submit" onClick={signUp}>Sign Up</Button>
                    </form>
                )}
                {waitingForCode && (
                    <form className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value="phone"
                                />
                            </div>
                            <TextInput
                                id="sign-up-code"
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="code"
                            />
                        </div>
                        <Button type="submit" onClick={confirmSignUp}>Confirm Sign Up</Button>
                        <Button type="button" onClick={resendCode}>Resend code</Button>
                    </form>
                )}
                <p>Already have account <Link  to='/signIn'>SignIn</Link>
</p>

            </div>
        </SignInHolder>
    )
}
export default SignUp