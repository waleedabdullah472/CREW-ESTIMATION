import React, { useState } from 'react';
import './Review.css';

const reviews = [
  {
    id: 1,
    name: 'Michael Peterson',
    project: 'Luxury Waterfront Villa in Miami',
    comment: 'The craftsmanship and attention to detail on our new villa were simply outstanding. The team managed every phase of the project with professionalism, delivering our dream home ahead of schedule. We were kept informed throughout the entire process and could not be happier with the results!',
    //imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Sarah Gomez',
    project: 'Commercial Office Building in Orlando',
    comment: 'Our office building project was handled with incredible efficiency. From the initial design to the final build, the communication was seamless. The quality of work is top-tier, and the building is a perfect representation of our company’s brand and vision. A truly professional team!',
   // imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'David Wilson',
    project: 'Renovation of Historic Home in St. Augustine',
    comment: 'Restoring a historic property is a delicate task, and this company proved to be masters of their craft. They preserved the original character while integrating modern amenities. The project was completed with respect for the history of the home and with impeccable quality.',
   // imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Jennifer Lee',
    project: 'Custom Retail Space in Tampa',
    comment: 'The team transformed our vision for a new retail store into a stunning reality. Their project management was flawless, and they delivered a high-quality, functional space that perfectly met our business needs. We’ve received so many compliments on the design and finish!',
   // imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Robert Miller',
    project: 'Multi-family Apartment Complex in Fort Lauderdale',
    comment: 'Constructing this large-scale apartment complex was a huge undertaking, but the team handled it with precision. They adhered to the timeline and budget, and the quality of the units is excellent. We are very happy with the final product and the partnership we built.',
   // imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Laura Garcia',
    project: 'Coastal Home Remodel in the Keys',
    comment: 'The full remodel of our coastal home was a breeze with this company. They expertly handled the challenges of building in a sensitive environment, and the result is a beautiful, resilient home that captures the spirit of the Keys. The process was transparent and stress-free.',
   // imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1974&auto=format&fit=crop'

  },
  {
    id: 7,
    name: 'William B. Johnson',
    project: 'New Marina and Dock in Fort Myers',
    comment: 'The construction of our new marina was a complex project, but the engineers and builders were incredibly knowledgeable. They navigated all regulatory requirements and delivered a state-of-the-art facility that is both durable and beautiful. We highly recommend them for any marine construction.',
   // imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
  },
  // To create a seamless loop, duplicate the first few cards
  {
    id: 8,
    name: 'Michael Peterson',
    project: 'Luxury Waterfront Villa in Miami',
    comment: 'The craftsmanship and attention to detail on our new villa were simply outstanding. The team managed every phase of the project with professionalism, delivering our dream home ahead of schedule. We were kept informed throughout the entire process and could not be happier with the results!',
    //imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a8117dc7b50?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 9,
    name: 'Sarah Gomez',
    project: 'Commercial Office Building in Orlando',
    comment: 'Our office building project was handled with incredible efficiency. From the initial design to the final build, the communication was seamless. The quality of work is top-tier, and the building is a perfect representation of our company’s brand and vision. A truly professional team!',
    //imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop',
  },
];

const Review = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const handleCardClick = (review) => {
    setSelectedReview(review);
  };

  const handleClosePopup = () => {
    setSelectedReview(null);
  };

  return (
    <div className="review-container">
      <h2>Client Testimonials</h2>
      <div className="review-cards-wrapper">
        <div className="review-cards-track">
          {reviews.map((review) => (
            <div
              className="review-card"
              key={review.id}
              onClick={() => handleCardClick(review)}
            >
              <div className="review-card-header">
                <img
                  //src={review.imageUrl}
                //  alt={review.name}
                 // className="reviewer-pic"
                />
                <div className="reviewer-info">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="reviewer-project">{review.project}</p>
                </div>
              </div>
              <p className="reviewer-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedReview && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClosePopup}>
              &times;
            </button>
            <div className="popup-header">
              <img
                src={selectedReview.imageUrl}
                alt={selectedReview.name}
                className="popup-pic"
              />
              <div className="popup-info">
                <p className="popup-name">{selectedReview.name}</p>
                <p className="popup-project">{selectedReview.project}</p>
              </div>
            </div>
            <p className="popup-comment">{selectedReview.comment}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;