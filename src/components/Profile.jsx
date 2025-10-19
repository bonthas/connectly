import React, { useState, useRef } from 'react'
import './Profile.css'

const Profile = ({ user, updateUser }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState(user)
  const fileInputRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const updatedUser = {
          ...editedUser,
          profileImage: event.target.result
        };
        setEditedUser(updatedUser);
        updateUser(updatedUser);
      };
      reader.readAsDataURL(file);
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  }

  const handleSave = () => {
    updateUser(editedUser);
    setIsEditing(false);
  }

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  }

  const getProfileImage = () => {
    if (user.profileImage) {
      return <img src={user.profileImage} alt="Profile" className="profile-avatar-image" />;
    }
    return <div className="profile-avatar-default">👤</div>;
  }

  return (
    <div className="profile-container">
      <div className="container">
        <div className="profile">
          <div className="profile-header">
            <div className="cover-photo"></div>
            <div className="profile-info">
              <div className="profile-avatar-container">
                {getProfileImage()}
                {isEditing && (
                  <button className="edit-photo-btn" onClick={triggerFileInput}>
                    📷
                  </button>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </div>
              <div className="profile-details">
                {isEditing ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      value={editedUser.firstName}
                      onChange={(e) => setEditedUser({...editedUser, firstName: e.target.value})}
                      className="edit-input"
                    />
                    <input
                      type="text"
                      value={editedUser.lastName}
                      onChange={(e) => setEditedUser({...editedUser, lastName: e.target.value})}
                      className="edit-input"
                    />
                  </div>
                ) : (
                  <>
                    <h1>{user.firstName} {user.lastName}</h1>
                    <p>Welcome to your Connectly profile!</p>
                  </>
                )}
              </div>
            </div>
            <div className="profile-actions">
              {isEditing ? (
                <div className="edit-actions">
                  <button className="btn btn-primary" onClick={handleSave}>Save</button>
                  <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </button>
              )}
            </div>
          </div>
          
          <div className="profile-content">
            <div className="profile-sidebar">
              <div className="sidebar-section">
                <h3>Intro</h3>
                <p>This is your personal space on Connectly. Share your thoughts and connect with friends!</p>
                {user.profileImage && (
                  <div className="photo-count">
                    <span>📷</span>
                    <span>1 profile photo</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="profile-main">
              <div className="create-post-section">
                <h3>Share something...</h3>
                <p>Your posts will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile