
import { langActionType } from "../action-types";
import { langAction } from "../actions/langActions";

const initialState = "eng";

const reducer = (state: string = initialState , action: langAction): string =>{
    switch (action.type) {
        case langActionType.ENG:
            return action.payload
        case langActionType.HIN:
            return action.payload
        case langActionType.MAR:
            return action.payload
        default:
            return state
    }
}
export default reducer
 