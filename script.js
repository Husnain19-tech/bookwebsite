// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const body = document.body;

    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleIcon.src = 'icon-sun.png';
    } else {
        toggleIcon.src = 'icon-moon.png';
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        toggleIcon.src = isDark ? 'icon-sun.png' : 'icon-moon.png';
        localStorage.setItem('darkMode', isDark);
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        menuIcon.src = navLinks.classList.contains('active') ? 'close-icon.png' : 'menu-icon.png';
    });

    // Fade-in Animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});