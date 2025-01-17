import React from 'react'

export default function CommentList(props) {
  const { comments = [] } = props;
  
  if (!comments.length) {
    return <h4>No comments yet.</h4>
  }

  return (
  <div className='flex-column'>
    {comments && 
      comments.map((comment) => (
        <div key={comment._id} className="flex-row justify-space-between negative-bottom-margin">
          <p><span className='username'>{comment.commentAuthor}</span> {comment.commentText}</p>
          <p className='light-text text-sm'>{comment.createdAt}</p>
        </div>
      ))}
  </div>
  )
};
