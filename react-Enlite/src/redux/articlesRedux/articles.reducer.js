import { ArticleActionTypes } from "./articles.types";

const INITIAL_STATE = {
  articleList: '',
  article: ''
}

const articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArticleActionTypes.UPDATE_ARTICLE_LIST:
      return {
        ...state,
        articleList: action.articleList
      }
    case ArticleActionTypes.SELECT_ARTICLE:
      return {
        ...state,
        article: {
          ...action.article,
          name: action.name
        }
      }

    default:
      return state;
  }
}

export default articleReducer;