import React, { useState } from 'react'
import Post from './Post'
import CreatePost from './CreatePost'
import './Feed.css'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: 'Jane Smith', avatar: '👩' },
      content: 'Just finished my morning run! Feeling great! 🏃‍♀️',
      timestamp: '2 hours ago',
      likes: 15,
      comments: 3
    },
    {
      id: 2,
      user: { name: 'Mike Johnson', avatar: '👨' },
      content: 'Beautiful sunset today! 🌅',
      timestamp: '4 hours ago',
      likes: 24,
      comments: 5
    }
  ])

  const addPost = (content) => {
    const newPost = {
      id: posts.length + 1,
      user: { name: 'You', avatar: '😊' },
      content,
      timestamp: 'Just now',
      likes: 0,
      comments: 0
    }
    setPosts([newPost, ...posts])
  }

  return (
    <div className="feed-container">
      <div className="container">
        <div className="feed">
          <CreatePost onPostCreate={addPost} />
          <div className="posts">
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed