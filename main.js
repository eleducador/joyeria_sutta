document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Initial check
    setTimeout(revealOnScroll, 100);
    
    // Add event listener
    window.addEventListener('scroll', revealOnScroll);

    // Navbar background on scroll (disabled for full transparency)
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        // Keeps it transparent
    });

    // Mobile menu toggle (simple version)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#fff';
                navLinks.style.padding = '2rem';
                navLinks.style.textAlign = 'center';
                navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.05)';
            }
        });
    }
});
