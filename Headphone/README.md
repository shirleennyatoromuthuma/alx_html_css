🎧 Headphones Landing Page
A responsive and interactive landing page for a headphones brand, meticulously crafted to match Figma design specifications and incorporating all required features and best practices. This project demonstrates strong foundations in HTML, CSS, and basic JavaScript for enhanced user experience.

✨ Features Implemented
HTML Structure (Task 1, 0-index.html): Clean, semantic HTML structure using div containers for logical grouping.

CSS Styling (Task 1, 0-styles.css):

CSS Reset: Universal reset (*::before, *::after, *) for consistent cross-browser styling.

CSS Variables: Extensive use of :root variables for colors, fonts, and common dimensions, promoting maintainability.

Simple CSS Selectors: Focus on generic and simple class selectors to avoid specificity issues.

Responsive Design: Adaptive layout for desktop, tablet, and mobile (480px breakpoint for mobile version).

Header/Hero Section:

Stunning hero banner with background image and dark linear gradient overlay for text readability.

Fixed header with logo (image) on the far left and navigation links on the far right.

Hero content (title, subtitle, CTA, paragraph) vertically centered and constrained by a 1000px max-width.

padding-top on body to accommodate the fixed header, preventing overlap.

Links & Buttons Interactions: Smooth color transition for links and opacity change for buttons on hover/active states (#FF6565 for links, 0.9 opacity for buttons).

"What We Do" Section (Task 2, 1-index.html, 1-styles.css):

Features a main descriptive paragraph and a responsive grid of four icon-and-text blocks.

Uses custom font icons (assumed from holberton_school-icon.zip but implemented with <img> tags for flexibility, matching the screenshot).

"Our Results" Section (Task 3, 2-index.html, 2-styles.css):

Features a main descriptive paragraph and a grid of four percentage-based result items.

CSS-Drawn Pentagon (Task 6, 6-index.html, 6-styles.css): The pentagon shapes are drawn purely with CSS clip-path, without relying on image files.

Contact Us Section (Task 4, 3-index.html, 3-styles.css):

Includes a functional contact form with input fields (Name, Email, Message) and a submit button.

Inputs feature an underline style that changes color on focus.

Footer (Task 5, 4-index.html, 4-styles.css):

Dark background, with left-aligned logo, right-aligned social media icons, and copyright text.

Flexible layout that adapts to mobile by stacking elements.

flex-grow and margin-top: auto on body and main sections ensure the footer correctly sticks to the bottom without overlapping content.

Animations (Task 7, 7-index.html, 7-styles.css): Subtle transform (scale, translate) and opacity animations added to items in "What We Do" and "Our Results" sections on hover.

Hamburger Menu (Task 8, 8-index.html, 8-styles.css, 8-script.js):

CSS: Hides the full navigation links and displays a hamburger icon on screens 480px wide or less.

JavaScript: Pure JavaScript (no frameworks) toggles the visibility of the mobile navigation menu when the hamburger icon is clicked.

Smooth transitions for menu open/close.

🚀 Technologies Used
HTML5: Semantic structure for web content.

CSS3: Advanced styling, including Flexbox, CSS Grid, custom properties (variables), pseudo-elements, and responsive media queries.

JavaScript: For interactive elements like the mobile navigation toggle.

Google Fonts (Inter): For consistent and modern typography.

SVG Icons: Used for scalable UI elements (hamburger, social media icons, and potentially logo/features if not PNGs).

📦 How to Run Locally
To view this project on your local machine:

Clone the Repository:

git clone https://github.com/alx-html_css/headphones.git
cd headphones

Extract Assets: Ensure you have extracted images_.zip (for hero background, headphones logo, feature icons, social icons) and holberton_school-icon.zip (if using custom font icons, though current implementation uses <img> for feature icons to match screenshots) into an images/ folder within the headphones directory.

Expected images/ content: headphones-logo.png, hero-background.jpg, sound-wave-icon.svg, clapperboard-icon.svg, musical-note-icon.svg, ear-icon.svg, pentagon.svg, background2.png, facebook-icon.svg, twitter-icon.svg, instagram-icon.svg.

Open 8-index.html: Double-click the 8-index.html file in your file explorer. Your default web browser will open and display the landing page.

📱 Responsiveness Testing
Resize your browser window to observe the responsive behavior:

Desktop: Full navigation, paragraph visible in hero.

Tablet/Narrow Desktop (up to 768px): Elements scale down, features grid becomes 2-column. Hamburger icon appears, desktop nav hides.

Mobile (480px and below): Hero paragraph hides, features grid becomes 1-column. Hamburger menu is active for navigation.

🧑‍💻 Author
[Shirleen Muthuma)
ALX Student