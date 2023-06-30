import React, { useState, useEffect } from "react";
import styles from "../styles/Review.module.scss";

const generateUniqueId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

function Review() {
  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState("");
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const handleSubmit = () => {
    const newReview = { text: input, stars, id: new Date().getTime() };
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setInput("");
    setStars(0);
  };

  const handleStarClick = (num) => {
    setStars(num);
  };
  const getStarColorClass = (numStars) => {
    switch (numStars) {
      case 2:
        return "red";
      case 3:
        return "green";
      case 4:
        return "orange";
      case 5:
        return "yellow";
      default:
        return "";
    }
  };

  return (
    <div className={styles["review-container"]}>
      <h2>Donne-nous ton avis</h2>
      <div>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} />
        <div className={styles["review-stars"]}>
          {[...Array(5)].map((_, i) => (
            <button
              className={styles[`star ${i < stars ? "active" : ""}`]}
              type="submit"
              key={generateUniqueId()}
              onClick={() => handleStarClick(i + 1)}
            >
              {i < stars ? "★" : "☆"}
            </button>
          ))}
        </div>
        <button
          className={styles["review-submit"]}
          type="submit"
          onClick={handleSubmit}
        >
          Soumettre mon avis
        </button>
      </div>
      <div className={styles["review-comments"]}>
        {[...reviews]
          .reverse()
          .map((review) => (
            <div key={review.id}>
              <div className={styles.comment}>{review.text}</div>
              {[...Array(5)].map((_, j) => (
                <span
                  key={generateUniqueId()}
                  className={
                    styles[
                      `star ${
                        j < review.stars ? getStarColorClass(review.stars) : ""
                      }`
                    ]
                  }
                >
                  {j < review.stars ? "★" : "☆"}
                </span>
              ))}
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default Review;
