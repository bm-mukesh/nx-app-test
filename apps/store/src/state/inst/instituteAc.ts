import { InstituteActionType, } from "../inst/actionType"
import { Dispatch } from "redux"
import { InstituteAction } from '../inst/instituteActions'
import axios from "axios"

const BASE_URL = 'https://b925d043-66e7-442f-87ec-4863e6832977.mock.pstmn.io/'
//   export function fetchArticleDetails() {
//     return function(dispatch) {
//       return axios.get("https://api.myjson.com/bins/19dtxc")
//         .then(({ data }) => {
//         dispatch(setArticleDetails(data));
//       });
//     };
//   }

export const getInstitute = (RES_DATA: any)  => {
    return async  (dispatch: Dispatch<InstituteAction>)=>{
        try{
            // const res = await  axios.get(`http://jsonplaceholder.typicode.com/users`);
            const res = await  axios.get(`${BASE_URL}/institute`);
            console.log("==========>res", res)
             return dispatch({
                type: InstituteActionType.GET_INST,
                payload: res.data
            })
         }
        catch(e){
            return dispatch( {
                type: InstituteActionType.INST_EROR,
                payload: RES_DATA,
            })
        }
    }
}

// export const getInstitute = (RES_DATA: any) => {
//     return(dispatch: Dispatch<InstituteAction>)=>{
//         dispatch({ type: InstituteActionType.GET_INST, payload: RES_DATA })
//     }
// }

export const addInstitute = (RES_DATA: any) => {
    return (dispatch: Dispatch<InstituteAction>) => {
        dispatch({
            type: InstituteActionType.ADD_INST,
            payload: RES_DATA
        })
    }
}

export const editInstitute = (RES_DATA: number) => {
    return (dispatch: Dispatch<InstituteAction>) => {
        dispatch({
            type: InstituteActionType.EDIT_INST,
            payload: RES_DATA
        })
    }
}

export const removeInstitute = (RES_DATA: number) => {
    return (dispatch: Dispatch<InstituteAction>) => {
        dispatch({
            type: InstituteActionType.REMOVE_INST,
            payload: RES_DATA
        })
    }
}

export const disableInstitute = (RES_DATA: number) => {
    return (dispatch: Dispatch<InstituteAction>) => {
        dispatch({
            type: InstituteActionType.DISABLE_INST,
            payload: RES_DATA
        })
    }
}
