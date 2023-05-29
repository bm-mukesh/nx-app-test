import { Questions } from '../../reducers/questions/index';

export enum ActionType {
  GET_QUESTIONS_PENDING = 'GET_QUESTIONS_PENDING',
  GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL',
}

interface actionPending {
  type: ActionType.GET_QUESTIONS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_QUESTIONS_SUCCESS;
  payload: Questions[];
}

interface actionFail {
  type: ActionType.GET_QUESTIONS_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
