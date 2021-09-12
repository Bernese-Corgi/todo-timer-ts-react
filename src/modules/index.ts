import { combineReducers } from 'redux';
import todos from './todos';
import auth from './auth';

const rootReducer = combineReducers({
  todos,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
