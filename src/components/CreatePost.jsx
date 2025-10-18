import React, { useState } from 'react'
import './CreatePost.css'

const CreatePost = ({ onPostCreate }) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content.trim()) {
      onPostCreate(content)
      setContent('')
    }
  }

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          rows="3"
        />
        <div className="post-actions">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost