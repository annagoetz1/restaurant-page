import loafImageSrc from './loaf.jpg';
import './styles.css'; // Import CSS

console.log("Hello, Webpack!");

// Function to update the content based on the selected tab
function showContent(tab) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    switch(tab) {
        case 'home':
            content.innerHTML = `
                <h1>Welcome to Our Sourdough Bakery</h1>
                <img src="${loafImageSrc}" alt="Sourdough Loaf on the counter">
                <p>We sell sourdough loaves, sandwich breads, english muffins, bagels, and many different sourdough-based pastries for optimal gut health and flavor.</p>
            `;
            break;
        case 'menu':
            content.innerHTML = `
                <h1>Menu</h1>
                <p>Our menu includes a variety of breads and pastries. Visit us at the Market District Farmers Market weekly during the summers from 11am-1pm on Thursdays.</p>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h1>About Us</h1>
                <p>We are passionate about sourdough baking and dedicated to providing high-quality products. Learn more about our story and values.</p>
            `;
            break;
        default:
            content.innerHTML = `<h1>Welcome</h1>`;
            break;
    }
}

// Add event listeners to the buttons
document.getElementById('home-btn').addEventListener('click', () => showContent('home'));
document.getElementById('menu-btn').addEventListener('click', () => showContent('menu'));
document.getElementById('about-btn').addEventListener('click', () => showContent('about'));

// Set the default content to 'home' when the page loads
document.addEventListener('DOMContentLoaded', () => showContent('home'));

// Dropdown menu functionality
document.getElementById("menuButton").addEventListener('click', () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show'); // Toggle the 'show' class
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    // Encapsulate carousel functionality
    (function carousel() {
        const images = document.querySelectorAll('.carousel-item');
        let currentIndex = 0; // Keep track of the current image within the scope

        // Function to show the image at a given index
        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none'; // Show current, hide others
            });
        }

        // Function to go to the next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
            showImage(currentIndex);
        }

        // Function to go to the previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
            showImage(currentIndex);
        }

        // Show the first image initially
        showImage(currentIndex);

        // Add event listeners to the buttons
        document.getElementById('nextBtn').addEventListener('click', nextImage);
        document.getElementById('prevBtn').addEventListener('click', prevImage);
    })();
});
