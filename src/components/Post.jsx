import React, { useState } from 'react'
import './Post.css'

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="post-header">
        <div className="user-info">
          <span className="avatar">{post.user.avatar}</span>
          <div>
            <h4>{post.user.name}</h4>
            <span className="timestamp">{post.timestamp}</span>
          </div>
        </div>
      </div>
      
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      
      <div className="post-stats">
        <span>{likes} likes</span>
        <span>{post.comments} comments</span>
      </div>
      
      <div className="post-actions">
        <button 
          className={`action-btn ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          👍 Like
        </button>
        <button className="action-btn">💬 Comment</button>
        <button className="action-btn">🔄 Share</button>
      </div>
    </div>
  )
}

export default Post