//const ART_API = "http://localhost:8080/api/artworks";
c//onst REVIEW_API = "http://localhost:8080/api/reviews";
const ART_API = "https://art-gallery-project-java.onrender.com/api/artworks";
const REVIEW_API = "https://art-gallery-project-java.onrender.com/api/reviews";
async function fetchArtworks() {

    const response = await fetch(ART_API);
    const data = await response.json();

    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    data.forEach(art => {

        gallery.innerHTML += `
            <div class="card">
                <img src="${art.imageUrl}" />
                <h2>${art.title}</h2>
                <h3>${art.artist}</h3>
                <p>${art.description}</p>
            </div>
        `;
    });
}

async function addArtwork() {

    const artwork = {
        title: document.getElementById("title").value,
        artist: document.getElementById("artist").value,
        imageUrl: document.getElementById("imageUrl").value,
        description: document.getElementById("description").value
    };

    await fetch(ART_API, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(artwork)
    });

    fetchArtworks();
}

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
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(review)
    });

    fetchReviews();
}

fetchArtworks();
fetchReviews();