// replace the user pool region, id, and app client id details
export const TEST = {
    "REGION": 'ap-south-1',
    "USER_POOL_ID": 'ap-south-1_y8cMcZLSg' ,
    "USER_POOL_APP_CLIENT_ID": 'tmk9pbmnbk2u8g904bc4hg005',
}
export const BM_POOL = {
    "REGION": 'ap-south-1',
    "USER_POOL_ID": 'ap-south-1_c7QfuVIVm' ,
    "USER_POOL_APP_CLIENT_ID": '10fadlarqhoqbtoi5ntt8itlrj',
}

// const x = {
//     {
//         "username": "dev.mukeshcgs@gmail.com",
//         "pool": {
//             "userPoolId": "ap-south-1_y8cMcZLSg",
//             "clientId": "tmk9pbmnbk2u8g904bc4hg005",
//             "client": {
//                 "endpoint": "https://cognito-idp.ap-south-1.amazonaws.com/",
//                 "fetchOptions": {}
//             },
//             "advancedSecurityDataCollectionFlag": true,
//             "storage": {
//                 "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.LastAuthUser": "dev.mukeshcgs@gmail.com",
//                 "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.userData": "{\"UserAttributes\":[{\"Name\":\"sub\",\"Value\":\"6f16cadd-e4c4-4bd9-a880-c4c1e782b953\"},{\"Name\":\"email_verified\",\"Value\":\"true\"},{\"Name\":\"phone_number_verified\",\"Value\":\"false\"},{\"Name\":\"phone_number\",\"Value\":\"+919821672735\"},{\"Name\":\"email\",\"Value\":\"dev.mukeshcgs@gmail.com\"}],\"Username\":\"dev.mukeshcgs@gmail.com\"}",
//                 "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.idToken": "eyJraWQiOiJJVnZBYWFGdFBMNmtBVFwvVmhkSGk3UHcySnNsMnlPSEVZMGNEeTNDMjVJaz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZjE2Y2FkZC1lNGM0LTRiZDktYTg4MC1jNGMxZTc4MmI5NTMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV95OGNNY1pMU2ciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZGV2Lm11a2VzaGNnc0BnbWFpbC5jb20iLCJvcmlnaW5fanRpIjoiMTMxMTEwYmQtNTgwMS00YTlkLWE3NWQtYmMzMjE4ZmMyMzE1IiwiYXVkIjoidG1rOXBibW5iazJ1OGc5MDRiYzRoZzAwNSIsImV2ZW50X2lkIjoiMmRmZDBkMWYtMDQxOS00Y2RlLTk5NTItMGI3Yzg4YTcwMmI1IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2ODYwMzYyNTQsInBob25lX251bWJlciI6Iis5MTk4MjE2NzI3MzUiLCJleHAiOjE2ODYwMzk4NTQsImlhdCI6MTY4NjAzNjI1NCwianRpIjoiYTY3YTU2MWEtNGVkNS00ZTJiLWJhODMtN2ZhZjc1NDljNGIxIiwiZW1haWwiOiJkZXYubXVrZXNoY2dzQGdtYWlsLmNvbSJ9.T88-IrJAJWx5NCNGdvlKW1wQImVYycHr-s9P4xL33A-hXQSiIdtxTKVabaSIlWjME6Qop5BoJXVXOyTZDZ3nKQAWGzQqn5bfztyqDaw1JxnWyp74KSoPD6D3bMkb0LyUiGbLSSOi2IAUqTmfPVi2SlAO8LapR5bm749-wjZlxyW6zm0g1q7V_BuEvv6U-Edt2AP8xlSsamDm2Wl0-QydhuLbuhWwUb_Useq865n-Sj6QXUYmdFBetqGN0I_wvZYERWo6e07QncumWz31smhWgS19DdBGflN2fVuMs6740PVU4NxVapf04nyjk6msF4XDrckoVuh3Q5kW9wreSOa56A",
//                 "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.eoDQ3R-yeJTAG8UNb1tWwpkfeRqKrbgCWHhbADDKpP40WJ7LV3AJBkmmdrAn8TzTkLDiqadC37OEMC9GVoLmKzz-LExFDDuEPsJ-3U-B8AxYeAUz7mqxyGECPPqsL9-xkCg3vyItX2Vi8Qnqiz2miwl7JC4FiklP06u5nuYTIVdwJMttQaQT-r9dByyYZ-qxu2kz9vNZTIEekaxX1zvWMdhGsHjCVIsUfnv4IYk_GEGP7Bio86tnuSFGIaY01VyZI6zGeNL5NJ__RTL4R3lr1M36TaYIHWpx1Tdrl4ZqL7XkAqnL-WeVjSl76eWZzjQmiNkYUP7LsNJArkk519En9g.tE0Sv3yIi_oMrjD6.lOyotqC6mljhgHHfpMIMekJi_E3oZT3tZAKkIzYDjIlw1NAs2XssCFYPeerAZLBOYRDkNiTLva1c01EEWuypSFpATOlF6qbaUBgjNysv_jc-5zMIzZIGjGm0FtisoOe0uEJMdFlXHjwP-IcJakfcUqcb_nNomEAJ3qw4DgCPx1CvQ7DraXtXdPWchzdt2hlHYpS_eCmGts8XnTkmsDX9KXlg-gAZ6rjqx1IdxNlLfD0qM2Puy9d8vRLj6Y3kS3vat6jpvPGE3NsckAmJKzytGUOaQrbdvgUy-oFfZfaEDqQk2EXnZY04Y5sQFV0zEW8xO8vhYM3w4KjJKRjr8EjObRPqLMKyhiGaJtnEeQ4UiWSNXaX6ALqTG_IFbqroqJeG5BehxZzdNNLumHZc3oHQBo5A9sIfjgfBrhKz20cI7zGQUdzjfgcuhiMNIn9rCbNA3PkPq9UhTJiKCM85njkuPY41MoaAGhyN1kGIgc5QRuxBWMUm-aaNHYuEVa0jM_PwCLXYfF-jEj5tyxxfAx9Am2krb57CSk7TxPF6K3iFz0uyVUAH3jDDZqsStp_PTiy5fnmruitHR2mTPVC4ZBRcTNVV13LOPIai9svWbauEqel3caqUFJIV8ERg-79njut1kaeDPGBL5I93uymKBrJiaFTfRnQev63_X8EUmN3XWefFMCCiwXIlC8BCc1Tea04mjie6iHylw0vi2ihKwViAXv1vFQJm3WO7gRsxHuRwrUwVqA3rlav1ZqxVHu39H_DjQe-F0n9COc2K9QMtHVaHYkUqNykqW7tQj6z35B5CSlM1bli-AVM7GYSJnUA8X-LykL6Ae7c1ogXpbqKig1ENKFpTGbc-3I-RzTfIVUJ_R8yY7JJUTFFh0KshVa2-0TfQE2aa7cNux_c9iQtUNLxqtyfeyZHsOwljedYDX8iMXAH3N4WHPr2AJXI4su8F7SzMtVlbxl27g5DE2SQ_NRtXqQN6R5mkHeAFEFeXhJ5QWCo160d5XSetu4VdYBjqBwwm0h47yEqVlCERM57f4w_i0U7PY7hiSsQJ-bfExlpj4dPQ4JObLZx6XW-JS-FOBGN63O4Hegj2fR_o1UylkEmcUVlulxtAIjnZqohCZwqb20BSaRKGF3TY6nCaw6NOrobuCRJaI42ZBJ2jVzVR6n_BTj_KpmYxcv34i2jOlfr0ieqYircaWYgcd4nXRGZOJ-OlLk6CZ79n7yVs3se2Eg6DiRJTXY4zSu36PfBXv9IUjmOWRbSf840AUsHPmz0nGTp8xT_IFkNjURogvUPeO6rzKunmEk58on7xaNyU.8QF17hfuO5KMw6EktHOT4Q",
//                 "amplify-signin-with-hostedUI": "false",
//                 "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.accessToken": "eyJraWQiOiIyUDNNaTMwYkRxczdDU2ZURlFLdUFFTjVVc1d0NndsZUZMQ3VEaW9cLzRKTT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZjE2Y2FkZC1lNGM0LTRiZDktYTg4MC1jNGMxZTc4MmI5NTMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX3k4Y01jWkxTZyIsImNsaWVudF9pZCI6InRtazlwYm1uYmsydThnOTA0YmM0aGcwMDUiLCJvcmlnaW5fanRpIjoiMTMxMTEwYmQtNTgwMS00YTlkLWE3NWQtYmMzMjE4ZmMyMzE1IiwiZXZlbnRfaWQiOiIyZGZkMGQxZi0wNDE5LTRjZGUtOTk1Mi0wYjdjODhhNzAyYjUiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjg2MDM2MjU0LCJleHAiOjE2ODYwMzk4NTQsImlhdCI6MTY4NjAzNjI1NCwianRpIjoiM2YyNDZkOWYtYjNhYS00MTQ0LThiM2MtZmZkMzUxNWU3YTI0IiwidXNlcm5hbWUiOiJkZXYubXVrZXNoY2dzQGdtYWlsLmNvbSJ9.Dv5YXrSZtGsse4Z-OnR6UT3PGiSot5-r7LOZis7CJI-KUSfxmhi5n9HHeYYyHhhUhtEAQs4WGxtd4XxXBK5C9nIqotH4pL6_UexmW3Z99PmGd8XYg-7dcw3OodOBlxnBZR2RB2LPYXHaz7NNjQ3HAwhPFFMwr5Sjz0Enia2dpR6_Uap_IX2Bl7LlCPPXPabeOBAQ7fkApTqCC-IbGmyIa3Ry_iVLjapQ39bEOsqKSYdQZgqbwFRZxNfmR-5HYGgA2VpH85n__6zC4REx41ZXEo9vgSDp2JoFQvRtT8rc49hKLhIdqbJFY6uTdb96sINwJhkGBbuSHmSBIJzdaDWvGw",
//                 "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.clockDrift": "-1"
//             }
//         },
//         "Session": null,
//         "client": {
//             "endpoint": "https://cognito-idp.ap-south-1.amazonaws.com/",
//             "fetchOptions": {}
//         },
//         "signInUserSession": {
//             "idToken": {
//                 "jwtToken": "eyJraWQiOiJJVnZBYWFGdFBMNmtBVFwvVmhkSGk3UHcySnNsMnlPSEVZMGNEeTNDMjVJaz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZjE2Y2FkZC1lNGM0LTRiZDktYTg4MC1jNGMxZTc4MmI5NTMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV95OGNNY1pMU2ciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZGV2Lm11a2VzaGNnc0BnbWFpbC5jb20iLCJvcmlnaW5fanRpIjoiMTMxMTEwYmQtNTgwMS00YTlkLWE3NWQtYmMzMjE4ZmMyMzE1IiwiYXVkIjoidG1rOXBibW5iazJ1OGc5MDRiYzRoZzAwNSIsImV2ZW50X2lkIjoiMmRmZDBkMWYtMDQxOS00Y2RlLTk5NTItMGI3Yzg4YTcwMmI1IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2ODYwMzYyNTQsInBob25lX251bWJlciI6Iis5MTk4MjE2NzI3MzUiLCJleHAiOjE2ODYwMzk4NTQsImlhdCI6MTY4NjAzNjI1NCwianRpIjoiYTY3YTU2MWEtNGVkNS00ZTJiLWJhODMtN2ZhZjc1NDljNGIxIiwiZW1haWwiOiJkZXYubXVrZXNoY2dzQGdtYWlsLmNvbSJ9.T88-IrJAJWx5NCNGdvlKW1wQImVYycHr-s9P4xL33A-hXQSiIdtxTKVabaSIlWjME6Qop5BoJXVXOyTZDZ3nKQAWGzQqn5bfztyqDaw1JxnWyp74KSoPD6D3bMkb0LyUiGbLSSOi2IAUqTmfPVi2SlAO8LapR5bm749-wjZlxyW6zm0g1q7V_BuEvv6U-Edt2AP8xlSsamDm2Wl0-QydhuLbuhWwUb_Useq865n-Sj6QXUYmdFBetqGN0I_wvZYERWo6e07QncumWz31smhWgS19DdBGflN2fVuMs6740PVU4NxVapf04nyjk6msF4XDrckoVuh3Q5kW9wreSOa56A",
//                 "payload": {
//                     "sub": "6f16cadd-e4c4-4bd9-a880-c4c1e782b953",
//                     "email_verified": true,
//                     "iss": "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_y8cMcZLSg",
//                     "phone_number_verified": false,
//                     "cognito:username": "dev.mukeshcgs@gmail.com",
//                     "origin_jti": "131110bd-5801-4a9d-a75d-bc3218fc2315",
//                     "aud": "tmk9pbmnbk2u8g904bc4hg005",
//                     "event_id": "2dfd0d1f-0419-4cde-9952-0b7c88a702b5",
//                     "token_use": "id",
//                     "auth_time": 1686036254,
//                     "phone_number": "+919821672735",
//                     "exp": 1686039854,
//                     "iat": 1686036254,
//                     "jti": "a67a561a-4ed5-4e2b-ba83-7faf7549c4b1",
//                     "email": "dev.mukeshcgs@gmail.com"
//                 }
//             },
//             "refreshToken": {
//                 "token": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.eoDQ3R-yeJTAG8UNb1tWwpkfeRqKrbgCWHhbADDKpP40WJ7LV3AJBkmmdrAn8TzTkLDiqadC37OEMC9GVoLmKzz-LExFDDuEPsJ-3U-B8AxYeAUz7mqxyGECPPqsL9-xkCg3vyItX2Vi8Qnqiz2miwl7JC4FiklP06u5nuYTIVdwJMttQaQT-r9dByyYZ-qxu2kz9vNZTIEekaxX1zvWMdhGsHjCVIsUfnv4IYk_GEGP7Bio86tnuSFGIaY01VyZI6zGeNL5NJ__RTL4R3lr1M36TaYIHWpx1Tdrl4ZqL7XkAqnL-WeVjSl76eWZzjQmiNkYUP7LsNJArkk519En9g.tE0Sv3yIi_oMrjD6.lOyotqC6mljhgHHfpMIMekJi_E3oZT3tZAKkIzYDjIlw1NAs2XssCFYPeerAZLBOYRDkNiTLva1c01EEWuypSFpATOlF6qbaUBgjNysv_jc-5zMIzZIGjGm0FtisoOe0uEJMdFlXHjwP-IcJakfcUqcb_nNomEAJ3qw4DgCPx1CvQ7DraXtXdPWchzdt2hlHYpS_eCmGts8XnTkmsDX9KXlg-gAZ6rjqx1IdxNlLfD0qM2Puy9d8vRLj6Y3kS3vat6jpvPGE3NsckAmJKzytGUOaQrbdvgUy-oFfZfaEDqQk2EXnZY04Y5sQFV0zEW8xO8vhYM3w4KjJKRjr8EjObRPqLMKyhiGaJtnEeQ4UiWSNXaX6ALqTG_IFbqroqJeG5BehxZzdNNLumHZc3oHQBo5A9sIfjgfBrhKz20cI7zGQUdzjfgcuhiMNIn9rCbNA3PkPq9UhTJiKCM85njkuPY41MoaAGhyN1kGIgc5QRuxBWMUm-aaNHYuEVa0jM_PwCLXYfF-jEj5tyxxfAx9Am2krb57CSk7TxPF6K3iFz0uyVUAH3jDDZqsStp_PTiy5fnmruitHR2mTPVC4ZBRcTNVV13LOPIai9svWbauEqel3caqUFJIV8ERg-79njut1kaeDPGBL5I93uymKBrJiaFTfRnQev63_X8EUmN3XWefFMCCiwXIlC8BCc1Tea04mjie6iHylw0vi2ihKwViAXv1vFQJm3WO7gRsxHuRwrUwVqA3rlav1ZqxVHu39H_DjQe-F0n9COc2K9QMtHVaHYkUqNykqW7tQj6z35B5CSlM1bli-AVM7GYSJnUA8X-LykL6Ae7c1ogXpbqKig1ENKFpTGbc-3I-RzTfIVUJ_R8yY7JJUTFFh0KshVa2-0TfQE2aa7cNux_c9iQtUNLxqtyfeyZHsOwljedYDX8iMXAH3N4WHPr2AJXI4su8F7SzMtVlbxl27g5DE2SQ_NRtXqQN6R5mkHeAFEFeXhJ5QWCo160d5XSetu4VdYBjqBwwm0h47yEqVlCERM57f4w_i0U7PY7hiSsQJ-bfExlpj4dPQ4JObLZx6XW-JS-FOBGN63O4Hegj2fR_o1UylkEmcUVlulxtAIjnZqohCZwqb20BSaRKGF3TY6nCaw6NOrobuCRJaI42ZBJ2jVzVR6n_BTj_KpmYxcv34i2jOlfr0ieqYircaWYgcd4nXRGZOJ-OlLk6CZ79n7yVs3se2Eg6DiRJTXY4zSu36PfBXv9IUjmOWRbSf840AUsHPmz0nGTp8xT_IFkNjURogvUPeO6rzKunmEk58on7xaNyU.8QF17hfuO5KMw6EktHOT4Q"
//             },
//             "accessToken": {
//                 "jwtToken": "eyJraWQiOiIyUDNNaTMwYkRxczdDU2ZURlFLdUFFTjVVc1d0NndsZUZMQ3VEaW9cLzRKTT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZjE2Y2FkZC1lNGM0LTRiZDktYTg4MC1jNGMxZTc4MmI5NTMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX3k4Y01jWkxTZyIsImNsaWVudF9pZCI6InRtazlwYm1uYmsydThnOTA0YmM0aGcwMDUiLCJvcmlnaW5fanRpIjoiMTMxMTEwYmQtNTgwMS00YTlkLWE3NWQtYmMzMjE4ZmMyMzE1IiwiZXZlbnRfaWQiOiIyZGZkMGQxZi0wNDE5LTRjZGUtOTk1Mi0wYjdjODhhNzAyYjUiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjg2MDM2MjU0LCJleHAiOjE2ODYwMzk4NTQsImlhdCI6MTY4NjAzNjI1NCwianRpIjoiM2YyNDZkOWYtYjNhYS00MTQ0LThiM2MtZmZkMzUxNWU3YTI0IiwidXNlcm5hbWUiOiJkZXYubXVrZXNoY2dzQGdtYWlsLmNvbSJ9.Dv5YXrSZtGsse4Z-OnR6UT3PGiSot5-r7LOZis7CJI-KUSfxmhi5n9HHeYYyHhhUhtEAQs4WGxtd4XxXBK5C9nIqotH4pL6_UexmW3Z99PmGd8XYg-7dcw3OodOBlxnBZR2RB2LPYXHaz7NNjQ3HAwhPFFMwr5Sjz0Enia2dpR6_Uap_IX2Bl7LlCPPXPabeOBAQ7fkApTqCC-IbGmyIa3Ry_iVLjapQ39bEOsqKSYdQZgqbwFRZxNfmR-5HYGgA2VpH85n__6zC4REx41ZXEo9vgSDp2JoFQvRtT8rc49hKLhIdqbJFY6uTdb96sINwJhkGBbuSHmSBIJzdaDWvGw",
//                 "payload": {
//                     "sub": "6f16cadd-e4c4-4bd9-a880-c4c1e782b953",
//                     "iss": "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_y8cMcZLSg",
//                     "client_id": "tmk9pbmnbk2u8g904bc4hg005",
//                     "origin_jti": "131110bd-5801-4a9d-a75d-bc3218fc2315",
//                     "event_id": "2dfd0d1f-0419-4cde-9952-0b7c88a702b5",
//                     "token_use": "access",
//                     "scope": "aws.cognito.signin.user.admin",
//                     "auth_time": 1686036254,
//                     "exp": 1686039854,
//                     "iat": 1686036254,
//                     "jti": "3f246d9f-b3aa-4144-8b3c-ffd3515e7a24",
//                     "username": "dev.mukeshcgs@gmail.com"
//                 }
//             },
//             "clockDrift": -1
//         },
//         "authenticationFlowType": "USER_SRP_AUTH",
//         "storage": {
//             "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.LastAuthUser": "dev.mukeshcgs@gmail.com",
//             "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.userData": "{\"UserAttributes\":[{\"Name\":\"sub\",\"Value\":\"6f16cadd-e4c4-4bd9-a880-c4c1e782b953\"},{\"Name\":\"email_verified\",\"Value\":\"true\"},{\"Name\":\"phone_number_verified\",\"Value\":\"false\"},{\"Name\":\"phone_number\",\"Value\":\"+919821672735\"},{\"Name\":\"email\",\"Value\":\"dev.mukeshcgs@gmail.com\"}],\"Username\":\"dev.mukeshcgs@gmail.com\"}",
//             "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.idToken": "eyJraWQiOiJJVnZBYWFGdFBMNmtBVFwvVmhkSGk3UHcySnNsMnlPSEVZMGNEeTNDMjVJaz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZjE2Y2FkZC1lNGM0LTRiZDktYTg4MC1jNGMxZTc4MmI5NTMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV95OGNNY1pMU2ciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiZGV2Lm11a2VzaGNnc0BnbWFpbC5jb20iLCJvcmlnaW5fanRpIjoiMTMxMTEwYmQtNTgwMS00YTlkLWE3NWQtYmMzMjE4ZmMyMzE1IiwiYXVkIjoidG1rOXBibW5iazJ1OGc5MDRiYzRoZzAwNSIsImV2ZW50X2lkIjoiMmRmZDBkMWYtMDQxOS00Y2RlLTk5NTItMGI3Yzg4YTcwMmI1IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2ODYwMzYyNTQsInBob25lX251bWJlciI6Iis5MTk4MjE2NzI3MzUiLCJleHAiOjE2ODYwMzk4NTQsImlhdCI6MTY4NjAzNjI1NCwianRpIjoiYTY3YTU2MWEtNGVkNS00ZTJiLWJhODMtN2ZhZjc1NDljNGIxIiwiZW1haWwiOiJkZXYubXVrZXNoY2dzQGdtYWlsLmNvbSJ9.T88-IrJAJWx5NCNGdvlKW1wQImVYycHr-s9P4xL33A-hXQSiIdtxTKVabaSIlWjME6Qop5BoJXVXOyTZDZ3nKQAWGzQqn5bfztyqDaw1JxnWyp74KSoPD6D3bMkb0LyUiGbLSSOi2IAUqTmfPVi2SlAO8LapR5bm749-wjZlxyW6zm0g1q7V_BuEvv6U-Edt2AP8xlSsamDm2Wl0-QydhuLbuhWwUb_Useq865n-Sj6QXUYmdFBetqGN0I_wvZYERWo6e07QncumWz31smhWgS19DdBGflN2fVuMs6740PVU4NxVapf04nyjk6msF4XDrckoVuh3Q5kW9wreSOa56A",
//             "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.eoDQ3R-yeJTAG8UNb1tWwpkfeRqKrbgCWHhbADDKpP40WJ7LV3AJBkmmdrAn8TzTkLDiqadC37OEMC9GVoLmKzz-LExFDDuEPsJ-3U-B8AxYeAUz7mqxyGECPPqsL9-xkCg3vyItX2Vi8Qnqiz2miwl7JC4FiklP06u5nuYTIVdwJMttQaQT-r9dByyYZ-qxu2kz9vNZTIEekaxX1zvWMdhGsHjCVIsUfnv4IYk_GEGP7Bio86tnuSFGIaY01VyZI6zGeNL5NJ__RTL4R3lr1M36TaYIHWpx1Tdrl4ZqL7XkAqnL-WeVjSl76eWZzjQmiNkYUP7LsNJArkk519En9g.tE0Sv3yIi_oMrjD6.lOyotqC6mljhgHHfpMIMekJi_E3oZT3tZAKkIzYDjIlw1NAs2XssCFYPeerAZLBOYRDkNiTLva1c01EEWuypSFpATOlF6qbaUBgjNysv_jc-5zMIzZIGjGm0FtisoOe0uEJMdFlXHjwP-IcJakfcUqcb_nNomEAJ3qw4DgCPx1CvQ7DraXtXdPWchzdt2hlHYpS_eCmGts8XnTkmsDX9KXlg-gAZ6rjqx1IdxNlLfD0qM2Puy9d8vRLj6Y3kS3vat6jpvPGE3NsckAmJKzytGUOaQrbdvgUy-oFfZfaEDqQk2EXnZY04Y5sQFV0zEW8xO8vhYM3w4KjJKRjr8EjObRPqLMKyhiGaJtnEeQ4UiWSNXaX6ALqTG_IFbqroqJeG5BehxZzdNNLumHZc3oHQBo5A9sIfjgfBrhKz20cI7zGQUdzjfgcuhiMNIn9rCbNA3PkPq9UhTJiKCM85njkuPY41MoaAGhyN1kGIgc5QRuxBWMUm-aaNHYuEVa0jM_PwCLXYfF-jEj5tyxxfAx9Am2krb57CSk7TxPF6K3iFz0uyVUAH3jDDZqsStp_PTiy5fnmruitHR2mTPVC4ZBRcTNVV13LOPIai9svWbauEqel3caqUFJIV8ERg-79njut1kaeDPGBL5I93uymKBrJiaFTfRnQev63_X8EUmN3XWefFMCCiwXIlC8BCc1Tea04mjie6iHylw0vi2ihKwViAXv1vFQJm3WO7gRsxHuRwrUwVqA3rlav1ZqxVHu39H_DjQe-F0n9COc2K9QMtHVaHYkUqNykqW7tQj6z35B5CSlM1bli-AVM7GYSJnUA8X-LykL6Ae7c1ogXpbqKig1ENKFpTGbc-3I-RzTfIVUJ_R8yY7JJUTFFh0KshVa2-0TfQE2aa7cNux_c9iQtUNLxqtyfeyZHsOwljedYDX8iMXAH3N4WHPr2AJXI4su8F7SzMtVlbxl27g5DE2SQ_NRtXqQN6R5mkHeAFEFeXhJ5QWCo160d5XSetu4VdYBjqBwwm0h47yEqVlCERM57f4w_i0U7PY7hiSsQJ-bfExlpj4dPQ4JObLZx6XW-JS-FOBGN63O4Hegj2fR_o1UylkEmcUVlulxtAIjnZqohCZwqb20BSaRKGF3TY6nCaw6NOrobuCRJaI42ZBJ2jVzVR6n_BTj_KpmYxcv34i2jOlfr0ieqYircaWYgcd4nXRGZOJ-OlLk6CZ79n7yVs3se2Eg6DiRJTXY4zSu36PfBXv9IUjmOWRbSf840AUsHPmz0nGTp8xT_IFkNjURogvUPeO6rzKunmEk58on7xaNyU.8QF17hfuO5KMw6EktHOT4Q",
//             "amplify-signin-with-hostedUI": "false",
//             "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.accessToken": "eyJraWQiOiIyUDNNaTMwYkRxczdDU2ZURlFLdUFFTjVVc1d0NndsZUZMQ3VEaW9cLzRKTT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2ZjE2Y2FkZC1lNGM0LTRiZDktYTg4MC1jNGMxZTc4MmI5NTMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX3k4Y01jWkxTZyIsImNsaWVudF9pZCI6InRtazlwYm1uYmsydThnOTA0YmM0aGcwMDUiLCJvcmlnaW5fanRpIjoiMTMxMTEwYmQtNTgwMS00YTlkLWE3NWQtYmMzMjE4ZmMyMzE1IiwiZXZlbnRfaWQiOiIyZGZkMGQxZi0wNDE5LTRjZGUtOTk1Mi0wYjdjODhhNzAyYjUiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjg2MDM2MjU0LCJleHAiOjE2ODYwMzk4NTQsImlhdCI6MTY4NjAzNjI1NCwianRpIjoiM2YyNDZkOWYtYjNhYS00MTQ0LThiM2MtZmZkMzUxNWU3YTI0IiwidXNlcm5hbWUiOiJkZXYubXVrZXNoY2dzQGdtYWlsLmNvbSJ9.Dv5YXrSZtGsse4Z-OnR6UT3PGiSot5-r7LOZis7CJI-KUSfxmhi5n9HHeYYyHhhUhtEAQs4WGxtd4XxXBK5C9nIqotH4pL6_UexmW3Z99PmGd8XYg-7dcw3OodOBlxnBZR2RB2LPYXHaz7NNjQ3HAwhPFFMwr5Sjz0Enia2dpR6_Uap_IX2Bl7LlCPPXPabeOBAQ7fkApTqCC-IbGmyIa3Ry_iVLjapQ39bEOsqKSYdQZgqbwFRZxNfmR-5HYGgA2VpH85n__6zC4REx41ZXEo9vgSDp2JoFQvRtT8rc49hKLhIdqbJFY6uTdb96sINwJhkGBbuSHmSBIJzdaDWvGw",
//             "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.clockDrift": "-1"
//         },
//         "keyPrefix": "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005",
//         "userDataKey": "CognitoIdentityServiceProvider.tmk9pbmnbk2u8g904bc4hg005.dev.mukeshcgs@gmail.com.userData",
//         "attributes": {
//             "sub": "6f16cadd-e4c4-4bd9-a880-c4c1e782b953",
//             "email_verified": true,
//             "phone_number_verified": false,
//             "phone_number": "+919821672735",
//             "email": "dev.mukeshcgs@gmail.com"
//         },
//         "preferredMFA": "NOMFA"
//     }
// }