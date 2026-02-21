document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(el => observer.observe(el));

    // Optional: Subtle parallax effect for the hero visual orb
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            const orbCore = document.querySelector('.orb-core');
            if (orbCore) {
                orbCore.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
            }
        });
    }
});
