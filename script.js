// This JavaScript file adds interactivity to the amahjidigitech.html webpage.
// It includes a function to handle form submission and a simple scroll-to-top button.

// =========================================================================
// Smooth Scrolling for Navigation
// This function adds smooth scrolling to all internal anchor links.
// This is an alternative to the "scroll-behavior: smooth" CSS property for wider browser support.
// =========================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header, if any
                behavior: 'smooth'
            });
        }
    });
});

// =========================================================================
// Simple Scroll-to-Top Button
// This function shows/hides a button to quickly scroll back to the top of the page.
// =========================================================================
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '&uarr;'; // Up arrow character
scrollButton.className = 'fixed bottom-5 right-5 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 opacity-0 pointer-events-none hover:bg-indigo-700';
document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollButton.classList.remove('opacity-0', 'pointer-events-none');
        scrollButton.classList.add('opacity-100');
    } else {
        scrollButton.classList.remove('opacity-100');
        scrollButton.classList.add('opacity-0', 'pointer-events-none');
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =========================================================================
// Basic Form Submission Handler (Placeholder)
// This function provides a basic example of how to handle form data.
// Replace the console.log with your actual form submission logic (e.g., fetch API call).
// The HTML provided does not have a form, this is for future use.
// =========================================================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        // Log the data to the console for demonstration
        console.log('Form data submitted:', data);

        // Here you would typically use fetch() to send the data to a server
        /*
        fetch('/your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            // Show a success message to the user
            alert('Thank you for your message!');
        })
        .catch(error => {
            console.error('Error:', error);
            // Show an error message to the user
            alert('Something went wrong. Please try again later.');
        });
        */
    });
}
