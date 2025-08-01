const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjMzYTJlOTk4MzQ3NTE2YTA0NzI3NTlkMmRkZWQ4YSIsIm5iZiI6MTc1MzMzMzEyNi4yNTgsInN1YiI6IjY4ODFiZDg2Mjc0YjA5MWY3NjUyOWRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PXArjgoQr8t1d15bsvUhPfy_VaRtqyjzw4af4_cYBJQ",
  },
};

const slider = document.getElementById("movieSlider");
const API_KEY = "https://api.themoviedb.org/3/discover/movie?page=100";
const API_URL = "https://api.themoviedb.org/3/discover/movie?page=100";

fetch(API_URL, options)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <div class="info">
          <h3>${movie.title}</h3>
          <p>POPULARITY ${movie.popularity}</p>
          <p>Watch The New Trailer</p>
          <p><i class="fa fa-thumbs-up "></i>    ${movie.vote_average}</p>
        </div>
      `;

      slider.appendChild(card);
    });
  })
  .catch((err) => console.error("API Error:", err));

document.getElementById("nextBtn").addEventListener("click", () => {
  slider.scrollLeft += 1150;
});

document.getElementById("prevBtn").addEventListener("click", () => {
  slider.scrollLeft -= 1150;
});

const slider1 = document.getElementById("actorSlider");
const actorsUrl = "https://api.themoviedb.org/3/trending/person/day?page=10";

fetch(actorsUrl, options)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((actor) => {
      const card = document.createElement("div");
      card.classList.add("actor-card");

      card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${actor.profile_path}" alt="${actor.name}">
        <div class="info">
          <h3>${actor.name}</h3>
          <p>Popularity: ${actor.popularity}</p>
        </div>
      `;

      slider1.appendChild(card);
    });
  })
  .catch((err) => console.error("API Error:", err));

// Scroll buttons
document.getElementById("nextbtn").addEventListener("click", () => {
  slider1.scrollLeft += 600;
});

document.getElementById("prevbtn").addEventListener("click", () => {
  slider1.scrollLeft -= 600;
});
