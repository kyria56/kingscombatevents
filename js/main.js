// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Initialize particles
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#bfa100', '#ffe066', '#fffbe6']
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#bfa100',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';

        }, 500);
    }, 2000);

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active') && 
            !e.target.closest('.nav-menu') && 
            !e.target.closest('.nav-toggle')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.featured-card, .event-card, .about-preview');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
            
            if (isVisible) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 15, 28, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 224, 255, 0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.event-card, .about-preview, .section-title').forEach(el => {
    observer.observe(el);
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.featured-card, .preview-content, .preview-image');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Video Modal for Featured Cards (REMOVED: cards now link directly to past-events.html)
// const videoCards = document.querySelectorAll('.video-card');
// const videoModal = document.getElementById('videoModal');
// const videoModalClose = document.querySelector('.video-modal-close');
// const videoDynamicContent = document.getElementById('videoDynamicContent');
// videoCards.forEach((card) => {
//     card.addEventListener('click', function() {
//         const videoUrl = this.getAttribute('data-video');
//         videoDynamicContent.innerHTML = `
//             <video id="modalVideo" width="560" height="315" controls autoplay>
//                 <source src="${videoUrl}" type="video/mp4">
//                 Your browser does not support the video tag.
//             </video>
//         `;
//         videoModal.style.display = 'block';
//     });
// });
// videoModalClose.onclick = function() {
//     videoModal.style.display = 'none';
//     videoDynamicContent.innerHTML = '';
// };
// window.onclick = function(event) {
//     if (event.target === videoModal) {
//         videoModal.style.display = 'none';
//         videoDynamicContent.innerHTML = '';
//     }
// }; 

// Terms & Conditions Toggle
const termsHeader = document.querySelector('.form-section.terms h3');
const termsContent = document.querySelector('.form-section.terms .terms-content');
const termsIcon = document.querySelector('.form-section.terms .fas');

if (termsHeader && termsContent && termsIcon) {
    termsHeader.addEventListener('click', () => {
        if (termsContent.style.display === 'none' || termsContent.style.display === '') {
            termsContent.style.display = 'block';
            termsIcon.style.transform = 'rotate(180deg)';
        } else {
            termsContent.style.display = 'none';
            termsIcon.style.transform = 'rotate(0deg)';
        }
    });
}

// Payment Method Instructions Display
const paymentMethodSelect = document.getElementById('paymentMethod');
const venmoInstructions = document.getElementById('venmoInstructions');
const zelleInstructions = document.getElementById('zelleInstructions');
const cashInstructions = document.getElementById('cashInstructions');

const showPaymentInstructions = (method) => {
    // Hide all instructions first
    venmoInstructions.style.display = 'none';
    zelleInstructions.style.display = 'none';
    cashInstructions.style.display = 'none';

    // Show the selected instruction
    if (method === 'venmo') {
        venmoInstructions.style.display = 'block';
    } else if (method === 'zelle') {
        zelleInstructions.style.display = 'block';
    } else if (method === 'cash') {
        cashInstructions.style.display = 'block';
    }
};

if (paymentMethodSelect) {
    // Add event listener for change
    paymentMethodSelect.addEventListener('change', (event) => {
        showPaymentInstructions(event.target.value);
    });

    // Initial display based on default selected value (if any)
    showPaymentInstructions(paymentMethodSelect.value);
} 