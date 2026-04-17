const products = [
    { 
        id: "ge-ps700", 
        name: "GE Profile™ Smart Fridge with Kitchen Assistant", 
        averagerating: 4.8 
    },
    { 
        id: "rb-saros", 
        name: "Roborock Saros Rover (Stair-Climbing Vacuum)", 
        averagerating: 4.6 
    },
    { 
        id: "sam-micro", 
        name: "Samsung 130-inch Micro RGB TV", 
        averagerating: 4.9 
    },
    { 
        id: "mam-lub3", 
        name: "Mammotion LUBA 3 AWD Robotic Mower", 
        averagerating: 4.4 
    },
    { 
        id: "hp-ebg1", 
        name: "HP Eliteboard G1a Keyboard PC", 
        averagerating: 4.2 
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");
    const lastMod = document.getElementById("lastMod");
    const currentYear = document.getElementById("currentYear");

    // Populate Product Options
    if (productSelect) {
        products.forEach(product => {
            let option = document.createElement("option");
            option.value = product.id; // Correctly uses ID for value
            option.textContent = product.name; // Correctly uses Name for display
            productSelect.appendChild(option);
        });
    }

    // Footer Dates
    if (lastMod) lastMod.textContent = document.lastModified;
    if (currentYear) currentYear.textContent = new Date().getFullYear();

    // LocalStorage Review Counter
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        const display = document.getElementById("counterDisplay");
        if (display) display.textContent = reviewCount;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("reviewForm");

    // Only run this if we are on the form page
    if (reviewForm) {
        reviewForm.addEventListener("submit", () => {
            // The 'action="review.html"' in the HTML will handle the redirect
            // after this event finishes. 
            console.log("Form submitted successfully!");
        });
    }

    // Logic for the Success Page (review.html)
    if (window.location.pathname.includes("review.html")) {
        // Retrieve, Increment, and Save the count
        let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);

        // Display the count
        const display = document.getElementById("counterDisplay");
        if (display) {
            display.textContent = reviewCount;
        }
    }
    
    // Standard Footer Logic
    const lastMod = document.getElementById("lastMod");
    const currentYear = document.getElementById("currentYear");
    if (lastMod) lastMod.textContent = document.lastModified;
    if (currentYear) currentYear.textContent = new Date().getFullYear();
});