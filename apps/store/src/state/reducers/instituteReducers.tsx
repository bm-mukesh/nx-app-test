
import { InstituteActionType } from "../inst/actionType";
import { InstituteAction } from "../inst/instituteActions";

const initialState = {};

const reducer = (state: any = initialState , action: InstituteAction): any =>{
    switch (action.type) {
        case InstituteActionType.GET_INST:
            return action.payload
        case InstituteActionType.INST_EROR:
            return action.payload
        case InstituteActionType.ADD_INST:
            return action.payload
        case InstituteActionType.EDIT_INST:
            return action.payload
        case InstituteActionType.REMOVE_INST:
            return action.payload
        case InstituteActionType.DISABLE_INST:
            return action.payload
        default:
            return state
    }
}
export default reducer
 