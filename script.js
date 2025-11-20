// Generate starfield
const starsContainer = document.getElementById('stars');
const numberOfStars = 200;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 2 + 2) + 's';
    starsContainer.appendChild(star);
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hide scroll indicator when scrolled
window.addEventListener('scroll', function() {
    const scrollText = document.querySelector('.scroll-text');
    if (scrollText) {
        if (window.scrollY > 300) {
            scrollText.style.opacity = '0';
        } else {
            scrollText.style.opacity = '1';
        }
    }
});

// Add parallax effect to sections (subtle movement)
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.querySelectorAll('section').forEach((section, index) => {
        const speed = 0.5;
        section.style.transform = `translateY(${scrolled * speed * 0.05}px)`;
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Add lightsaber sound effect on hover (optional - visual feedback only)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s ease-out';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.4s ease-in';
    });
});

// Console message for fellow developers
console.log('%c⚔ MAY THE FORCE BE WITH YOU ⚔', 'color: #FFE81F; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #FFE81F;');
console.log('%cWelcome, fellow Jedi of Code! 🌟', 'color: #00D9FF; font-size: 16px;');
console.log('%cExplore the source, you must. Learn and grow, you shall.', 'color: #FFF; font-size: 14px;');

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const sections = ['about', 'projects', 'contact'];
    const currentHash = window.location.hash.substring(1);
    const currentIndex = sections.indexOf(currentHash);
    
    // Arrow Down - next section
    if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        e.preventDefault();
        const nextSection = document.getElementById(sections[currentIndex + 1]);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Arrow Up - previous section
    if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        const prevSection = document.getElementById(sections[currentIndex - 1]);
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add dynamic year to footer (if needed)
const footer = document.querySelector('footer p');
if (footer && footer.textContent.includes('2025')) {
    const currentYear = new Date().getFullYear();
    if (currentYear !== 2025) {
        footer.textContent = footer.textContent.replace('2025', currentYear);
    }
}