
import { ActionType } from "../action-types";
import { Action } from "../actions/index";
const initialState = 0;

const reducer = (state: number = initialState , action: Action): number =>{
    switch (action.type) {
        case ActionType.DEPOSITE:
            return state + action.payload
        case ActionType.WITHDRAW:
            return state - action.payload
        case ActionType.BANKRUPT:
            return 0
        default:
            return state
    }
}
export default reducer
 