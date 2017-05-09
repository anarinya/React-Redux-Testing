import { combineReducers } from 'redux';
import CommentsReducer from './CommentsReducer';

const rootReducer = combineReducers({
  // comments: (state = []) => state
  comments: CommentsReducer
});

export default rootReducer;