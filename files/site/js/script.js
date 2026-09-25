// Personal Homepage Script
// This script handles smooth scrolling, animations, and interactive features

(function() {
    'use strict';

    // Smooth scrolling for navigation links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Animate elements on scroll
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.project-card, .skill-item, .contact-link');
        animatedElements.forEach(el => observer.observe(el));
    }

    // Add active state to navigation
    function initNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        function updateActiveNav() {
            let currentSection = '';
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    }

    // Initialize typing effect for hero section
    function initTypingEffect() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;

        const text = typingElement.textContent;
        typingElement.textContent = '';
        let index = 0;

        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }

        setTimeout(type, 500);
    }

    // Form validation (if contact form exists)
    function initFormValidation() {
        const form = document.querySelector('form');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]');
            const message = form.querySelector('textarea');
            
            if (email && !email.value.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (message && message.value.trim().length < 10) {
                alert('Please enter a longer message');
                return;
            }

            alert('Thank you for your message!');
            form.reset();
        });
    }

    // Mobile menu toggle
    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav ul');
        
        if (menuToggle && nav) {
            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('show');
                this.classList.toggle('active');
            });
        }
    }

    // Initialize all features when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        initSmoothScroll();
        initScrollAnimations();
        initNavigation();
        initTypingEffect();
        initFormValidation();
        initMobileMenu();
        console.log('Personal homepage initialized successfully');
    }

})();