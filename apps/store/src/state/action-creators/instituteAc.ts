import { ActionType,langActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from '../actions/index'
import { langAction } from '../actions/langActions'

// export const depositeMoney = (amount:number) =>{
//     return (dispatch:Dispatch<Action>)=>{
//         dispatch({type:ActionType.DEPOSITE,payload:amount})
//     }
// }

export const addInstitute = (amount:number) =>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({type:ActionType.DEPOSITE,payload:amount})
    }
}

// export const withdrawMoney = (amount:number) =>{
//     return (dispatch:Dispatch<Action>)=>{
//         dispatch({ 
//             type:ActionType.WITHDRAW,payload:amount})
//     }
// }
export const removeInstitute = (amount:number) =>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({ 
            type:ActionType.WITHDRAW,payload:amount})
    }
}

// export const bankrupt = (amount:number) =>{
//     return (dispatch:Dispatch<Action>)=>{
//         dispatch({type:ActionType.BANKRUPT,payload:amount        })
//     }
// }
export const disableInstitute = (amount:number) =>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({type:ActionType.BANKRUPT,payload:amount        })
    }
}
 