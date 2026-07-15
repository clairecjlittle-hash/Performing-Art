/* ==========================================
   INTERACTIVE FEATURES FOR PERSONAL WEBSITE
   Smooth navigation, animations, and interactions
   ========================================== */

// SMOOTH SCROLL BEHAVIOR
// When clicking navigation links, scroll smoothly to the section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ADD FADE-IN ANIMATION WHEN ELEMENTS COME INTO VIEW
// This makes cards and sections appear smoothly as you scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to all cards
document.querySelectorAll('.interest-card, .about-content, .learning-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-in, transform 0.6s ease-in';
    observer.observe(el);
});

// HIGHLIGHT ACTIVE NAVIGATION LINK
// Shows which section you're currently viewing
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// MAKE INTEREST CARDS INTERACTIVE
// When you hover or click cards, add a fun effect
document.querySelectorAll('.interest-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// BUTTON CLICK FEEDBACK
// Make buttons feel more interactive
document.querySelectorAll('.btn, .contact-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create a ripple effect (optional visual feedback)
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple-effect 0.6s ease-out';
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
    });
});

// LOG A MESSAGE WHEN PAGE LOADS
// Just for fun! Check your browser console
console.log('✨ Welcome to Claire Hu\'s Performing Arts Website! ✨');
console.log('🎵 Enjoy exploring the site! 🎵');
