import { InstituteActionType } from "../inst/actionType"

interface getAction{
    type: InstituteActionType.GET_INST
    payload:any
}
interface erorAction{
    type: InstituteActionType.INST_EROR
    payload:any
}
interface addAction{
    type: InstituteActionType.ADD_INST
    payload:any
}
interface editAction{
    type: InstituteActionType.EDIT_INST
    payload:any
}
interface removeAction{
    type: InstituteActionType.REMOVE_INST
    payload:any

}
interface disableAction{
    type: InstituteActionType.DISABLE_INST
    payload:any
}
export type InstituteAction =  getAction | erorAction | addAction | editAction | removeAction | disableAction
