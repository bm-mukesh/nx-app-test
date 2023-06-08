import { ActionType } from "../action-types"

interface depositeAction{
    type: ActionType.DEPOSITE
    payload:number
}

interface withdrawAction{
    type: ActionType.WITHDRAW
    payload:number
}

interface bankruptAction{
    type: ActionType.BANKRUPT
}

export type Action =  depositeAction | withdrawAction | bankruptAction
