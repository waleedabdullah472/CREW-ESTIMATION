import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Review.css";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [project, setProject] = useState("");
  const [name, setName] = useState("");
  const [reviewedProjects, setReviewedProjects] = useState(new Set());
  const [userInteractions, setUserInteractions] = useState({});

  // Load reviews and user data from backend and localStorage
  useEffect(() => {
    fetchReviews();
    
    // Load reviewed projects from localStorage
    const savedReviewedProjects = localStorage.getItem("reviewedProjects");
    if (savedReviewedProjects) {
      setReviewedProjects(new Set(JSON.parse(savedReviewedProjects)));
    }
    
    // Load user interactions from localStorage
    const savedInteractions = localStorage.getItem("reviewInteractions");
    if (savedInteractions) {
      setUserInteractions(JSON.parse(savedInteractions));
    }
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reviews");
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const addReview = async () => {
    if (rating === 0 || comment.trim() === "" || project.trim() === "") {
      alert("Please add project name, rating, and comment.");
      return;
    }
    
    // Check if user has already reviewed this project
    if (reviewedProjects.has(project)) {
      alert("You have already reviewed this project. You can only review each project once.");
      return;
    }
    
    try {
      const res = await axios.post("http://localhost:5000/api/reviews", {
        project, 
        rating, 
        comment, 
        name: name || "Anonymous"
      });
      
      // Add project to reviewed set
      const updatedReviewedProjects = new Set(reviewedProjects);
      updatedReviewedProjects.add(project);
      setReviewedProjects(updatedReviewedProjects);
      
      // Save to localStorage
      localStorage.setItem("reviewedProjects", JSON.stringify(Array.from(updatedReviewedProjects)));
      
      setReviews([res.data, ...reviews]);
      setRating(0);
      setHover(0);
      setComment("");
      setProject("");
      setName("");
    } catch (err) {
      console.error("Error adding review:", err);
      alert("Error adding review. Please try again.");
    }
  };

  const handleLike = async (id) => {
    // Check if user has already interacted with this review
    if (userInteractions[id]) {
      if (userInteractions[id] === 'like') {
        alert("You've already liked this review!");
        return;
      } else {
        alert("You've already disliked this review. You can't like it now.");
        return;
      }
    }
    
    try {
      const res = await axios.put(`http://localhost:5000/api/reviews/${id}/like`);
      
      // Update the reviews with new like count
      setReviews(reviews.map(r => r._id === id ? res.data : r));
      
      // Record the interaction
      const updatedInteractions = {...userInteractions, [id]: 'like'};
      setUserInteractions(updatedInteractions);
      localStorage.setItem("reviewInteractions", JSON.stringify(updatedInteractions));
    } catch (err) {
      console.error("Error liking review:", err);
    }
  };

  const handleDislike = async (id) => {
    // Check if user has already interacted with this review
    if (userInteractions[id]) {
      if (userInteractions[id] === 'dislike') {
        alert("You've already disliked this review!");
        return;
      } else {
        alert("You've already liked this review. You can't dislike it now.");
        return;
      }
    }
    
    try {
      const res = await axios.put(`http://localhost:5000/api/reviews/${id}/dislike`);
      
      // Update the reviews with new dislike count
      setReviews(reviews.map(r => r._id === id ? res.data : r));
      
      // Record the interaction
      const updatedInteractions = {...userInteractions, [id]: 'dislike'};
      setUserInteractions(updatedInteractions);
      localStorage.setItem("reviewInteractions", JSON.stringify(updatedInteractions));
    } catch (err) {
      console.error("Error disliking review:", err);
    }
  };

  // Check if current project has been reviewed
  const isProjectReviewed = reviewedProjects.has(project);

  return (
    <div className="review-page">
      <h2 className="review-title">Customer Reviews</h2>

      {/* Review Form */}
      <div className="review-form">
        <input
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          placeholder="Project name..."
          className="review-input"
        />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="review-input"
        />

        {/* Show message if project already reviewed */}
        {isProjectReviewed && (
          <div className="review-warning">
            ⚠️ You've already reviewed this project
          </div>
        )}

        {/* Star Rating */}
        <div className="star-rating">
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <span
                key={index}
                className={`star ${currentRating <= (hover || rating) ? "active" : ""} ${isProjectReviewed ? "disabled" : ""}`}
                onClick={() => !isProjectReviewed && setRating(currentRating)}
                onMouseEnter={() => !isProjectReviewed && setHover(currentRating)}
                onMouseLeave={() => !isProjectReviewed && setHover(rating)}
              >
                ★
              </span>
            );
          })}
        </div>

        {/* Comment Box */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
          className={`review-textarea ${isProjectReviewed ? "disabled" : ""}`}
          disabled={isProjectReviewed}
        />

        <button 
          onClick={addReview} 
          className={`review-btn ${isProjectReviewed ? "disabled" : ""}`}
          disabled={isProjectReviewed}
        >
          {isProjectReviewed ? "Already Reviewed" : "Submit Review"}
        </button>
      </div>

      {/* Display Reviews */}
      <ul className="review-list">
        {reviews.map((rev) => {
          const userAction = userInteractions[rev._id];
          return (
            <li key={rev._id} className="review-item">
              <div className="review-header">
                <div>
                  <h3>{rev.project}</h3>
                  <span className="review-author">by {rev.name}</span>
                </div>
                <div className="review-stars">
                  {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                </div>
              </div>
              <p className="review-comment">"{rev.comment}"</p>
              <div className="review-footer">
                <span className="review-date">
                  {new Date(rev.date).toLocaleDateString()}
                </span>
                <div className="review-actions">
                  <button 
                    onClick={() => handleLike(rev._id)} 
                    className={`like-btn ${userAction === 'like' ? 'active' : ''} ${userAction ? 'disabled' : ''}`}
                    disabled={userAction}
                  >
                    👍 {rev.likes}
                  </button>
                  <button 
                    onClick={() => handleDislike(rev._id)} 
                    className={`dislike-btn ${userAction === 'dislike' ? 'active' : ''} ${userAction ? 'disabled' : ''}`}
                    disabled={userAction}
                  >
                    👎 {rev.dislikes}
                  </button>
                </div>
              </div>
              {userAction && (
                <div className="interaction-message">
                  You've already {userAction}d this review
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}