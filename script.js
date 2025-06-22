const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');

// Check if both elements exist to prevent errors if IDs are missing
if (mobileMenuToggle && mainNav) {
    // Add a click event listener to the hamburger icon
    mobileMenuToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the main navigation.
        // The 'active' class in CSS will control whether the menu is shown or hidden.
        mainNav.classList.toggle('active');
    });

    // Optional: Close the menu when a navigation link is clicked.
    // This is good for single-page landing sites where clicking a link
    // should navigate and then hide the menu for better UX.
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // If the menu is currently active (visible), remove the 'active' class to hide it.
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
} else {
    // Log an error to the console if elements are not found, which helps in debugging.
    console.error("Error: Could not find mobile menu toggle or main navigation elements. Please check their IDs in 8-index.html.");
}