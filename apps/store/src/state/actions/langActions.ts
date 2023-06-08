import { langActionType } from "../action-types"

interface engAction{
    type: langActionType.ENG
    payload:string
}

interface hinAction{
    type: langActionType.HIN
    payload:string
}

interface marAction{
    type: langActionType.MAR
    payload:string
}

export type langAction =  engAction | hinAction | marAction
