function showNumberOfReviews() {
    // 1️⃣ Initialize display element variable
    const reviewsDisplay = document.getElementById("reviews");

    // 2️⃣ Get the stored VALUE for the numReviews-ls KEY in localStorage if it exists. If the numReviews KEY is missing, then assign 0 to the numReviews variable.
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

    // 3️⃣ Determine if this is the first visit or display the number of reviews. We wrote this example backwards in order for you to think deeply about the logic.
    if (numReviews !== 1) {
        reviewsDisplay.textContent = `Number of reviews completed: ${numReviews}`;
    } else {
        reviewsDisplay.textContent = `This is your first review. 🥳 Welcome!`;
    }

};

showNumberOfReviews();