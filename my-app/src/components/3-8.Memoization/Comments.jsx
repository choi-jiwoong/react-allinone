import React, { useCallback } from 'react'
import CommentItem from './CommentItem'

export default function Comments({ commentList }) {

  const handeClick = useCallback((title) => {
    console.log(`${title} is clicked!`);
  }, []);

  return (
    <div>
      {commentList.map(comment => <CommentItem
        key={comment.id}
        title={comment.title}
        content={comment.content}
        likes={comment.likes}
        onClick={handeClick}
      />)}
    </div>
  )
}
