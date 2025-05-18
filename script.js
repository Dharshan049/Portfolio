// Theme Switcher
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Function to set theme
    function setTheme(isDark) {
        if (isDark) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            console.log('Dark mode enabled');
        } else {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            console.log('Light mode enabled');
        }
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    themeToggle.checked = savedTheme === 'dark';
    setTheme(savedTheme === 'dark');

    // Handle theme toggle
    themeToggle.addEventListener('change', (e) => {
        setTheme(e.target.checked);
    });

    // Initialize animations
    loadAnimations();
});

// Lottie Animations
let experienceAnimation = null;
let educationAnimation = null;
let contactAnimation = null;

// Function to load animations
async function loadAnimations() {
    console.log('Loading animations...');
    try {
        // Load development animation for experience section
        const developmentResponse = await fetch('./development.json');
        if (!developmentResponse.ok) {
            throw new Error(`Failed to load development animation: ${developmentResponse.statusText}`);
        }
        const developmentData = await developmentResponse.json();
        
        // Experience section animation
        experienceAnimation = lottie.loadAnimation({
            container: document.getElementById('lottie-light'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: developmentData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true,
                hideOnTransparent: true
            }
        });

        // Load education animation
        const educationResponse = await fetch('./education.json');
        if (!educationResponse.ok) {
            throw new Error(`Failed to load education animation: ${educationResponse.statusText}`);
        }
        const educationData = await educationResponse.json();
        
        // Education section animation
        educationAnimation = lottie.loadAnimation({
            container: document.getElementById('lottie-education-light'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: educationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true,
                hideOnTransparent: true
            }
        });

        // Load contact animation
        const contactResponse = await fetch('./contact.json');
        if (!contactResponse.ok) {
            throw new Error(`Failed to load contact animation: ${contactResponse.statusText}`);
        }
        const contactData = await contactResponse.json();
        
        // Contact section animation
        contactAnimation = lottie.loadAnimation({
            container: document.getElementById('lottie-contact-light'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: contactData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true,
                hideOnTransparent: true
            }
        });

        console.log('All animations loaded successfully');

    } catch (error) {
        console.error('Error setting up animations:', error);
    }
} 