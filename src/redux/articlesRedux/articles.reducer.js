import { ArticleActionTypes } from "./articles.types";

const INITIAL_STATE = {
  articleList: ''
}

const articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArticleActionTypes.UPDATE_ARTICLE_LIST:
      return {
        ...state,
        articleList: action.articleList
      }

    default:
      return state;
  }
}

export default articleReducer;