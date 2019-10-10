import { combineReducers } from 'redux';

import articleReducer from "./articlesRedux/articles.reducer";

const rootReducer = combineReducers({
  articleReducer
})

export default rootReducer;