let nextCommentId = 0
export const addComment = (newsId, comment) => ({
  type: 'ADD_COMMENT',
  newsId: parseInt(newsId),
  nextCommentId: nextCommentId++,
  comment
})
export const editComment = (newsId, comment) => ({
  type: 'EDIT_COMMENT',
  newsId: parseInt(newsId),
  comment
})

