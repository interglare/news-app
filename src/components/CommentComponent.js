import React, { useEffect, useState } from 'react'
import ModalEditComment from './ModalEditComment'

const CommentComponent = ({ data, newsId }) => {
  
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.text}</p>
        <ModalEditComment editData={data} newsId={newsId}/>
      </div>
    </div>
  )
}

export default CommentComponent