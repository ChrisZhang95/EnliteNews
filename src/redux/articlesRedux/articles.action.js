import { ArticleActionTypes } from './articles.types'

export const updateArticleList = (articleList) => ({
  type: ArticleActionTypes.UPDATE_ARTICLE_LIST,
  articleList
})
