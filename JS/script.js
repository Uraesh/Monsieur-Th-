document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const backToTopButton = document.getElementById('back-to-top');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const canvas = document.getElementById('bubble-canvas');
    const ctx = canvas.getContext('2d');

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', () => {
        const isMenuOpen = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', !isMenuOpen);
        mobileMenuButton.querySelector('i').className = `fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`;
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.querySelector('i').className = 'fas fa-bars text-2xl';
        });
    });

    // Back to top button
    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('visible', window.pageYOffset > 300);
        navbar.classList.toggle('shadow-lg', window.pageYOffset > 100);
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.querySelectorAll('.form-error').forEach(error => error.style.display = 'none');

            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const subject = contactForm.querySelector('#subject').value.trim();
            const message = contactForm.querySelector('#message').value.trim();
            const consent = contactForm.querySelector('#consent').checked;
            let hasError = false;

            if (!name) {
                contactForm.querySelector('#name + .form-error').style.display = 'block';
                hasError = true;
            }
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                contactForm.querySelector('#email + .form-error').style.display = 'block';
                hasError = true;
            }
            if (!subject) {
                contactForm.querySelector('#subject + .form-error').style.display = 'block';
                hasError = true;
            }
            if (!message) {
                contactForm.querySelector('#message + .form-error').style.display = 'block';
                hasError = true;
            }
            if (!consent) {
                contactForm.querySelector('#consent + .form-error').style.display = 'block';
                hasError = true;
            }

            if (hasError) return;

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';

            setTimeout(() => {
                alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
            }, 1500);
        });
    }

    // Active link and navbar color
    const setActiveLinkAndNavbarColor = () => {
        const scrollPosition = window.pageYOffset + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
                });

                navbar.classList.remove('bg-accueil', 'bg-produits', 'bg-a-propos', 'bg-emplacements', 'bg-carrieres', 'bg-contact');
                navbar.classList.add(`bg-${sectionId}`);
            }
        });
    };

    // Throttle function
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    };

    const throttledSetActiveLinkAndNavbarColor = throttle(setActiveLinkAndNavbarColor, 200);
    window.addEventListener('scroll', throttledSetActiveLinkAndNavbarColor);

    // Section animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Footer bubble animation
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = footer.offsetHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Bubble {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 20 + 10;
            this.dx = (Math.random() - 0.5) * 2;
            this.dy = (Math.random() - 0.5) * 2;
            this.color = ['#ffd9e3', '#b8e0d2', '#a6d1e6', '#fe9001'][Math.floor(Math.random() * 4)];
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.6;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            if (mouse.x && mouse.y) {
                const distX = this.x - mouse.x;
                const distY = this.y - mouse.y;
                const distance = Math.sqrt(distX * distX + distY * distY);

                if (distance < 100) {
                    const angle = Math.atan2(distY, distX);
                    this.dx += Math.cos(angle) * 0.5;
                    this.dy += Math.sin(angle) * 0.5;
                }
            }

            this.draw();
        }
    }

    const mouse = { x: null, y: null };

    footer.addEventListener('mousemove', (event) => {
        const rect = footer.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    footer.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    const bubbles = Array.from({ length: 20 }, () => new Bubble());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bubbles.forEach(bubble => bubble.update());
        requestAnimationFrame(animate);
    }

    animate();
});

function applyForJob(jobTitle) {
    alert(`Candidature envoyée pour le poste de ${jobTitle} ! Nous vous contacterons bientôt.`);
}