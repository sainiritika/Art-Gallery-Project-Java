const ART_API = "https://art-gallery-project-java.onrender.com/api/artworks";
const REVIEW_API = "https://art-gallery-project-java.onrender.com/api/reviews";

/* FETCH ARTWORKS */
async function fetchArtworks() {
    const response = await fetch(ART_API);
    const data = await response.json();

    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    data.forEach(art => {
        gallery.innerHTML += `
            <div class="card">
                <img src="${art.image_url}" />
                <h2>${art.title}</h2>
                <h3>${art.artist}</h3>
                <p>${art.description}</p>
            </div>
        `;
    });
}

/* ADD ARTWORK */
async function addArtwork() {
    const artwork = {
        title: document.getElementById("title").value,
        artist: document.getElementById("artist").value,
        image_url: document.getElementById("image_url").value,
        description: document.getElementById("description").value
    };
     console.log("ARTWORK DATA:", artwork);
    await fetch(ART_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artwork)
    });

    fetchArtworks();
}

/* REVIEWS */
async function fetchReviews() {
    const response = await fetch(REVIEW_API);
    const data = await response.json();

    const reviews = document.getElementById("reviews");
    reviews.innerHTML = "";

    data.forEach(review => {
        reviews.innerHTML += `
            <div class="card">
                <h3>${review.username}</h3>
                <p>${review.comment}</p>
            </div>
        `;
    });
}

async function addReview() {
    const review = {
        username: document.getElementById("username").value,
        comment: document.getElementById("comment").value
    };

    await fetch(REVIEW_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review)
    });

    fetchReviews();
}

/* INIT */
fetchArtworks();
fetchReviews();