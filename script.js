// PREMIUM HACKER PORTFOLIO - ENHANCED JS
// ===================================

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('nav');

// Toggle Mobile Menu with Enhanced Animation
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    const spans = hamburger.querySelectorAll('span');

    if (navMenu.classList.contains('hidden')) {
        spans[0].style.transform = 'rotate(0) translateY(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translateY(0)';
    } else {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    }
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0) translateY(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translateY(0)';
    });
});

// Enhanced Navbar Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 20) {
        navbar.classList.add('shadow-lg', 'shadow-hacker-green/10');
    } else {
        navbar.classList.remove('shadow-lg', 'shadow-hacker-green/10');
    }

    lastScroll = currentScroll;
});

// Enhanced Active Navigation Link
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active', 'text-hacker-green');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active', 'text-hacker-green');
        }
    });
});

// Enhanced Typing Animation
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
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class=\"txt\">${this.txt}</span>`;

        let typeSpeed = this.isDeleting ? 50 : 100;

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init on Load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typing Animation
    const textElement = document.querySelector('.typing-text');
    if (textElement) {
        const words = JSON.parse(textElement.getAttribute('data-words'));
        new TypeWriter(textElement, words);
    }

    // Initialize Matrix Effect
    initMatrixRain();

    // Initialize Skill Bar Animations
    initSkillBars();

    // Initialize Floating Icons
    createFloatingIcons();

    // Initialize Parallax Effect
    initParallax();

    // Initialize Card Tilt Effects
    initCardTilt();
});

// Enhanced Glitch Effect
const glitchText = document.querySelectorAll('.glitch');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]@#$%";

glitchText.forEach(element => {
    element.onmouseover = event => {
        let iterations = 0;
        const originalText = event.target.dataset.value || event.target.innerText;

        const interval = setInterval(() => {
            event.target.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iterations >= originalText.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);
    };
});

// Contact Form Handling (if exists)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button');
        const originalContent = btn.innerHTML;

        btn.innerHTML = '<span class=\"font-mono animate-pulse\">TRANSMITTING...</span>';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<span class=\"font-mono\">TRANSMISSION_COMPLETE ✓</span>';
            btn.classList.add('bg-hacker-green', 'text-hacker-dark');
            btn.classList.remove('bg-transparent', 'text-hacker-green');

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

// Enhanced Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section > div > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Smooth Scrolling with Easing
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.offsetTop - 80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});

// Enhanced Matrix Rain Effect
function initMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'pointer-events-none', 'z-0');
    canvas.style.opacity = '0.08';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * -100;
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

// Enhanced Skill Bar Animation
function initSkillBars() {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target.querySelector('.skill-bar');
                if (skillBar) {
                    skillBar.style.width = '0';
                    const targetWidth = skillBar.classList.toString().match(/w-\[(\d+)%\]/)[1];
                    setTimeout(() => {
                        skillBar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                        skillBar.style.width = targetWidth + '%';
                    }, 100);
                }
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.group\\/bar').forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Enhanced Floating Interactive Icons
function createFloatingIcons() {
    const sections = ['about', 'skills', 'projects'];
    const icons = {
        about: ['fa-code', 'fa-laptop-code', 'fa-terminal', 'fa-bug'],
        skills: ['fa-java', 'fa-python', 'fa-js', 'fa-android'],
        projects: ['fa-rocket', 'fa-star', 'fa-lightbulb', 'fa-cog']
    };

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const container = document.createElement('div');
        container.className = 'floating-icons-container';
        Object.assign(container.style, {
            position: 'absolute',
            inset: '0',
            pointerEvents: 'none',
            overflow: 'hidden',
            zIndex: '1'
        });

        for (let i = 0; i < 4; i++) {
            const icon = document.createElement('i');
            icon.className = `fas ${icons[sectionId][i]} floating-icon`;
            Object.assign(icon.style, {
                position: 'absolute',
                fontSize: '28px',
                color: 'rgba(0, 255, 65, 0.12)',
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                animation: `float ${5 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                filter: 'blur(0.5px)'
            });

            container.appendChild(icon);
        }

        section.style.position = 'relative';
        section.insertBefore(container, section.firstChild);
    });

    // Enhanced mouse interaction
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.floating-icon').forEach(icon => {
            const rect = icon.getBoundingClientRect();
            const iconX = rect.left + rect.width / 2;
            const iconY = rect.top + rect.height / 2;

            const deltaX = e.clientX - iconX;
            const deltaY = e.clientY - iconY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance < 200) {
                const angle = Math.atan2(deltaY, deltaX);
                const force = (200 - distance) / 200;
                const moveX = -Math.cos(angle) * force * 40;
                const moveY = -Math.sin(angle) * force * 40;

                icon.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.6})`;
                icon.style.color = `rgba(0, 255, 65, ${0.12 + force * 0.4})`;
                icon.style.filter = 'blur(0px)';
            } else {
                icon.style.transform = 'translate(0, 0) scale(1)';
                icon.style.color = 'rgba(0, 255, 65, 0.12)';
                icon.style.filter = 'blur(0.5px)';
            }
        });
    });
}

// Parallax Effect for Hero Section
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.home-content, .home-visual');

        parallaxElements.forEach((el, index) => {
            const speed = index === 0 ? 0.5 : 0.3;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Enhanced Card Tilt Effect
function initCardTilt() {
    const cards = document.querySelectorAll('.card-hover');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Resume Modal Functions
function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';

        // Add entrance animation
        setTimeout(() => {
            modal.querySelector('.modal-content')?.classList.add('scale-100', 'opacity-100');
        }, 10);
    }
}

function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.querySelector('.modal-content')?.classList.remove('scale-100', 'opacity-100');

        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }, 300);
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('resumeModal');
    if (modal && e.target === modal) {
        closeResumeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeResumeModal();
    }
});

// Cursor Trail Effect (Optional)
function initCursorTrail() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.cursor-trail');

    circles.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
    });

    window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach((circle, index) => {
            circle.style.left = x - 12 + 'px';
            circle.style.top = y - 12 + 'px';
            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    }

    // Uncomment to enable cursor trail
    // animateCircles();
}

// Performance Optimization
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            ticking = false;
        });
        ticking = true;
    }
});

// Console Easter Egg
console.log('%c⚡ SYSTEM_INITIALIZED ⚡', 'color: #00ff41; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to the Matrix... 🔰', 'color: #00d9ff; font-size: 14px;');
console.log('%cBuilt with 💚 by Shubhash Singh', 'color: #8892b0; font-size: 12px;');