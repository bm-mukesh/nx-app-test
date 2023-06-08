import { ActionType,langActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from '../actions/index'
import { langAction } from '../actions/langActions'
 
// import i18next from 'i18next';

export const depositeMoney = (amount:number) =>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({type:ActionType.DEPOSITE,payload:amount})
    }
}

export const withdrawMoney = (amount:number) =>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({ 
            type:ActionType.WITHDRAW,payload:amount})
    }
}

export const bankrupt = (amount:number) =>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({type:ActionType.BANKRUPT,payload:amount        })
    }
}

// LANGUAGE

export const enLangChange = (lang:string)=>{
    return (dispatch:Dispatch<langAction>)=>{
        dispatch({
            type:langActionType.ENG,
            payload:lang
        })
        // i18next.changeLanguage(lang);
    }
}
// export const hinLangChange = (lang:string)=>{
//     return (dispatch:Dispatch<langAction>)=>{
//         dispatch({
//             type:langActionType.HIN,
//             payload:lang
//         })
//     }
// }
// export const marLangChange = (lang:string)=>{
//     return (dispatch:Dispatch<langAction>)=>{
//         dispatch({
//             type:langActionType.MAR,
//             payload:lang
//         })
//     }
// }