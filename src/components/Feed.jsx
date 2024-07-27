import React from 'react';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="navbar">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram" className="navbar-logo" />
        <div className="navbar-icons">
          <button className="navbar-icon">
            <img src="https://img.icons8.com/material-outlined/24/like.png" alt="Like" />
          </button>
          <button className="navbar-icon">
            <img src="https://img.icons8.com/material-outlined/24/chat.png" alt="Messages" />
          </button>
        </div>
      </div>
      
      {/* Stories Section */}
      <div className="stories-container">
      <div className="story your-story">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIThRZ-zVHgmcW4_lhF7eoeFvOHXGtel20g&s" alt="Your Story" className="story-image" />
          <div className="add-story-button">
            <img src="https://img.icons8.com/material-outlined/24/add--v1.png" alt="Add Story" />
          </div>
          <div className="story-username">Your Story</div>
        </div>
        <div className="story">
          <img src="https://images.unsplash.com/photo-1615022702095-ff2c036f3360?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Story 2" className="story-image" />
          <div className="story-username">Riya</div>
        </div>

        <div className="story">
          <img src="https://miro.medium.com/v2/resize:fit:495/0*xFuo_UNWchLZ8bqS.jpeg" alt="Story 2" className="story-image" />
          <div className="story-username">Diya</div>
        </div>


        <div className="story">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQte5fcMOTmjtpS_mbhx8pSttA5Oy0OmCwfgA&s" alt="Story 2" className="story-image" />
          <div className="story-username">Fitha</div>
        </div>

        <div className="story">
          <img src="https://ih1.redbubble.net/image.4578502993.4109/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="Story 2" className="story-image" />
          <div className="story-username">Jaya</div>
        </div>

        {/* Add more story elements as needed */}
      </div>

      {/* Feed Posts */}
      <div className="feed">
        {/* Example Post */}
        <div className="post">
          <div className="post-header">
            <img src="https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg" alt="User" className="post-avatar" />
            <div className="post-username">Anu</div>
          </div>
          <img src="https://4kwallpapers.com/images/wallpapers/anime-girl-dream-2880x1800-9766.jpg" alt="Post" className="post-image" />
          <div className="post-interactions">
            <button className="interaction-button">
              <img src="https://img.icons8.com/material-outlined/24/like.png" alt="Like" />
            </button>
            <button className="interaction-button">
              <img src="https://img.icons8.com/material-outlined/24/comments.png" alt="Comment" />
            </button>
            <button className="interaction-button">
              <img src="https://img.icons8.com/material-outlined/24/share.png" alt="Share" />
            </button>
          </div>
          <div className="post-caption">
            <strong>Username</strong> Caption text...
          </div>
        </div>
        {/* Add more posts as needed */}
      </div>
    </div>
  );
};

export default Feed;
