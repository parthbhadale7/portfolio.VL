// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Typing Effect for Hero Section
const typingText = document.querySelector('.typing-text');
const professions = ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentProfession = professions[professionIndex];
    
    if (isDeleting) {
        // Remove char
        typingText.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add char
        typingText.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
    }
    
    // If word is complete
    if (!isDeleting && charIndex === currentProfession.length) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause at end
    } 
    // If word is deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        setTimeout(type, 500); // Pause before next word
    } 
    // Continue typing/deleting
    else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// Start the typing effect
type();

// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});