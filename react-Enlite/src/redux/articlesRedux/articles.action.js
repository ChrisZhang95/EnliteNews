import { ArticleActionTypes } from './articles.types'

export const updateArticleList = (articleList) => ({
  type: ArticleActionTypes.UPDATE_ARTICLE_LIST,
  articleList
})

export const selectArticle = article => ({
  type: ArticleActionTypes.SELECT_ARTICLE,
  article,
  name: article.source.name
})
