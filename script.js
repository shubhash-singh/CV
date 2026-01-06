// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('nav');

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    // Toggle icon between bars and times
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('border-b', 'border-hacker-green/20', 'bg-hacker-dark/95');
        navbar.classList.remove('bg-hacker-dark/80');
    } else {
        navbar.classList.remove('border-b', 'border-hacker-green/20', 'bg-hacker-dark/95');
        navbar.classList.add('bg-hacker-dark/80');
    }
});

// Typing Animation
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init Typing Animation
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.typing-text');
    if (textElement) {
        const words = JSON.parse(textElement.getAttribute('data-words'));
        new TypeWriter(textElement, words);
    }

    // Initialize Matrix Effect
    initMatrixRain();
});

// Glitch Effect for Headings
const glitchText = document.querySelectorAll('.glitch');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]";

glitchText.forEach(element => {
    element.onmouseover = event => {
        let iterations = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);
    };
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button');
        const originalContent = btn.innerHTML;

        // Simulate sending
        btn.innerHTML = '<span class="font-mono animate-pulse">TRANSMITTING...</span>';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<span class="font-mono text-hacker-dark">TRANSMISSION_COMPLETE ✓</span>';
            btn.classList.add('bg-hacker-green', 'text-hacker-dark');
            btn.classList.remove('bg-transparent', 'text-hacker-green');

            // Reset form
            setTimeout(() => {
                contactForm.reset();
                btn.innerHTML = originalContent;
                btn.disabled = false;
                btn.classList.remove('bg-hacker-green', 'text-hacker-dark');
                btn.classList.add('bg-transparent', 'text-hacker-green');
            }, 3000);
        }, 1500);
    });
}

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('section > div').forEach(el => {
    el.classList.add('transform', 'transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});

// Smooth Scrolling
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

// Matrix Rain Effect
function initMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'pointer-events-none', 'z-0', 'opacity-5');
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}

// Mouse Trailing Effect for Photo Card
const photoCard = document.getElementById('photo-card');
if (photoCard) {
    const trails = [];
    const maxTrails = 20;

    photoCard.addEventListener('mousemove', (e) => {
        const rect = photoCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create trail element
        const trail = document.createElement('div');
        trail.style.position = 'absolute';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        trail.style.width = '8px';
        trail.style.height = '8px';
        trail.style.borderRadius = '50%';
        trail.style.background = 'radial-gradient(circle, rgba(0,217,255,0.8) 0%, rgba(0,217,255,0) 70%)';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '5';
        trail.style.transform = 'translate(-50%, -50%)';

        photoCard.appendChild(trail);
        trails.push(trail);

        // Animate and remove
        setTimeout(() => {
            trail.style.transition = 'opacity 0.5s, transform 0.5s';
            trail.style.opacity = '0';
            trail.style.transform = 'translate(-50%, -50%) scale(2)';

            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
                const index = trails.indexOf(trail);
                if (index > -1) trails.splice(index, 1);
            }, 500);
        }, 100);

        // Limit number of trails
        while (trails.length > maxTrails) {
            const oldTrail = trails.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.parentNode.removeChild(oldTrail);
            }
        }
    });
}
