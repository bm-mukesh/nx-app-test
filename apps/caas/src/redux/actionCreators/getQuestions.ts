import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes/questions/index';

export const getQuestions = (postId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_QUESTIONS_PENDING,
    });
    try {
      const { data } = await axios.get(
        `https://b925d043-66e7-442f-87ec-4863e6832977.mock.pstmn.io/questions?subject=${postId}`
      );
      console.log('getQuestions', data.questions);
      dispatch({
        type: ActionType.GET_QUESTIONS_SUCCESS,
        payload: data.questions,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_QUESTIONS_FAIL,
        payload: err.message,
      });
    }
  };
};
