import { Action, ActionType } from '../../actionTypes/questions/index';

export interface Questions {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface State {
  questions: Questions[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  questions: [],
  loading: false,
  error: null,
};

const commentReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_QUESTIONS_PENDING:
      return {
        loading: true,
        questions: [],
        error: null,
      };
    case ActionType.GET_QUESTIONS_SUCCESS:
      return {
        loading: false,
        questions: action.payload,
        error: null,
      };
    case ActionType.GET_QUESTIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
        questions: [],
      };
    default:
      return state;
  }
};

export default commentReducer;
