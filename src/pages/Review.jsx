import React, { useState } from "react";
import "./Review.css";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [project, setProject] = useState("");
  const [name, setName] = useState("");

  const addReview = () => {
    if (rating === 0 || comment.trim() === "" || project.trim() === "") {
      alert("Please add project name, rating, and comment.");
      return;
    }
    const newReview = {
      project,
      rating,
      comment,
      name: name || "Anonymous",
      date: new Date().toLocaleDateString(),
      likes: 0,
      dislikes: 0,
    };
    setReviews([newReview, ...reviews]);
    setRating(0);
    setHover(0);
    setComment("");
    setProject("");
    setName("");
  };

  const handleLike = (index) => {
    const updated = [...reviews];
    updated[index].likes += 1;
    setReviews(updated);
  };

  const handleDislike = (index) => {
    const updated = [...reviews];
    updated[index].dislikes += 1;
    setReviews(updated);
  };

  return (
    <div className="review-page">
      <h2 className="review-title">Customer Reviews</h2>

      {/* ⭐ Review Form */}
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

        {/* ⭐ Star Rating */}
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <span
                key={index}
                className={`star ${currentRating <= (hover || rating) ? "active" : ""}`}
                onClick={() => setRating(currentRating)}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(rating)}
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
          className="review-textarea"
        />

        <button onClick={addReview} className="review-btn">Submit Review</button>
      </div>

      {/* ⭐ Display Reviews */}
      <ul className="review-list">
        {reviews.map((rev, index) => (
          <li key={index} className="review-item">
            <div className="review-header">
              <div>
                <h3>{rev.project}</h3>
                <span className="review-author">by {rev.name}</span>
              </div>
              <div className="review-stars">
                {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
              </div>
            </div>
            <p className="review-comment">“{rev.comment}”</p>
            <div className="review-footer">
              <span className="review-date">{rev.date}</span>
              <div className="review-actions">
                <button onClick={() => handleLike(index)} className="like-btn">
                  👍 {rev.likes}
                </button>
                <button onClick={() => handleDislike(index)} className="dislike-btn">
                  👎 {rev.dislikes}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
