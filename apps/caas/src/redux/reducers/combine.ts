import { combineReducers } from 'redux';
import commentReducer from './index';
import questionsReducer from './questions/index';

const reducers = combineReducers({
  comments: commentReducer,
  questions: questionsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
