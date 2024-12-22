// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const productSection = document.getElementById("products");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get form values
        const productName = document.getElementById("product-name").value;
        const specs = document.getElementById("specs").value;
        const performance = document.getElementById("performance").value;
        const review = document.getElementById("review").value;

        // Create a new product card
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="286079.png" alt="${productName}">
            <div class="product-info">
                <h3>${productName}</h3>
                <p><strong>Specifications:</strong> ${specs}</p>
                <p><strong>Performance:</strong> ${performance}</p>
                <p><strong>Review:</strong> ${review}</p>
            </div>
        `;

        // Add the new card to the products section
        productSection.appendChild(productCard);

        // Reset the form
        form.reset();
        alert("Your review has been added!");
    });
});
