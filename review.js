document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const text = document.getElementById("reviewText").value;
  const rating = +document.getElementById("starRating").value;
  const name = document.getElementById("reviewerName").value;

  const reviewCard = document.createElement("div");
  reviewCard.className = "review-card";

  const starDisplay = "★".repeat(rating) + "☆".repeat(5 - rating);

  reviewCard.innerHTML = `
    <div class="stars">${starDisplay}</div>
    <p>"${text}"</p>
    <h4>– ${name}</h4>
  `;

  document.querySelector(".reviews").appendChild(reviewCard);

  // Optional: save to localStorage for persistence
  const reviews = JSON.parse(localStorage.getItem("customerReviews") || "[]");
  reviews.push({ text, rating, name });
  localStorage.setItem("customerReviews", JSON.stringify(reviews));

  document.getElementById("reviewForm").reset();
});

// On load: load saved reviews
window.addEventListener("DOMContentLoaded", () => {
  const reviews = JSON.parse(localStorage.getItem("customerReviews") || "[]");
  const container = document.querySelector(".reviews");
  reviews.forEach(({ text, rating, name }) => {
    const card = document.createElement("div");
    card.className = "review-card";
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    card.innerHTML = `
      <div class="stars">${stars}</div>
      <p>"${text}"</p>
      <h4>– ${name}</h4>
    `;
    container.appendChild(card);
  });
});
