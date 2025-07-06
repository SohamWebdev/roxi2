// Animate fade-in sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .zoom-in, .slide-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animatedEls.forEach(el => observer.observe(el));

    // Staggered animation for gallery cards
    const galleryCards = document.querySelectorAll('.gallery .card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 120);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    galleryCards.forEach(card => cardObserver.observe(card));

    // Staggered animation for skills
    const skillItems = document.querySelectorAll('.skills-list li');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 100);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    skillItems.forEach(item => skillObserver.observe(item));

    // Staggered animation for testimonials
    const testimonials = document.querySelectorAll('.testimonial-card');
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 200);
                testimonialObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    testimonials.forEach(card => testimonialObserver.observe(card));

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero button scroll
    document.getElementById('see-work').addEventListener('click', () => {
        const portfolio = document.getElementById('portfolio');
        window.scrollTo({
            top: portfolio.offsetTop - 60,
            behavior: 'smooth'
        });
    });

    // Contact form fake submit
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('form-message').textContent = "Thank you! I'll get back to you soon.";
        this.reset();
    });

    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });

    // Apple-like section animation
    const appleSections = document.querySelectorAll('.section-apple');
    const appleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                appleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });
    appleSections.forEach(sec => appleObserver.observe(sec));
});