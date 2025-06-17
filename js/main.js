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

// Multi-Slide Modals Logic for Past Events
document.addEventListener('DOMContentLoaded', () => {
    const modals = [
        {
            openBtnId: 'openPoster2ModalBtn',
            modalId: 'pastEvent2Modal',
            descriptions: [
                'This is the official event poster.',
                'These are highlights from the event.',
                'This is information about the host.'
            ]
        },
        {
            openBtnId: 'openPoster3ModalBtn',
            modalId: 'pastEvent3Modal',
            descriptions: [
                'This is the official event poster.',
                'These are highlights from the event.',
                'This is information about the host.'
            ]
        }
    ];

    modals.forEach(eventModal => {
        const openBtn = document.getElementById(eventModal.openBtnId);
        const modal = document.getElementById(eventModal.modalId);
        
        if (openBtn && modal) {
            const closeBtn = modal.querySelector('.image-gallery-close');
            const slidesContainer = modal.querySelector('.modal-slides-container');
            const prevArrow = modal.querySelector('.prev-slide-arrow');
            const nextArrow = modal.querySelector('.next-slide-arrow');
            const dots = modal.querySelectorAll('.modal-pagination .dot');
            const descriptionEl = modal.querySelector('.modal-description');

            let currentSlide = 0;

            const showSlide = (index) => {
                currentSlide = (index + slidesContainer.children.length) % slidesContainer.children.length;
                slidesContainer.style.transform = `translateX(-${currentSlide * 100 / slidesContainer.children.length}%)`;
                updatePagination();
                updateDescription();
            };

            const updatePagination = () => {
                dots.forEach((dot, index) => {
                    if (index === currentSlide) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            };

            const updateDescription = () => {
                if (descriptionEl) {
                    descriptionEl.textContent = eventModal.descriptions[currentSlide];
                }
            };

            // Open Modal
            openBtn.addEventListener('click', () => {
                currentSlide = 0; // Explicitly set currentSlide to 0
                
                // Temporarily disable transition, set transform, force reflow, then re-enable transition
                slidesContainer.style.transition = 'none';
                slidesContainer.style.transform = `translateX(-${currentSlide * 100 / slidesContainer.children.length}%)`;
                void slidesContainer.offsetWidth; // Force reflow/repaint

                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                updatePagination(); // Update pagination dots immediately
                updateDescription(); // Update description immediately

                // Re-enable transition after a very short delay to allow the initial render to complete
                setTimeout(() => {
                    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            });

            // Close Modal
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });

            // Close if clicked outside content
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });

            // Navigation Arrows
            prevArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlide(currentSlide - 1);
            });
            nextArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlide(currentSlide + 1);
            });

            // Pagination Dots
            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showSlide(parseInt(dot.dataset.slide));
                });
            });
        }
    });

    // Close with Escape key for all modals (if active)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(eventModal => {
                const modal = document.getElementById(eventModal.modalId);
                if (modal && modal.style.display === 'flex') {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        }
    });
});

// --- Mobile Carousel for 2nd Slide (Event Highlights) ---
function initMobileCarousels() {
    if (window.innerWidth > 768) return; // Only activate on mobile
    
    // For each modal
    ['pastEvent2Modal', 'pastEvent3Modal'].forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        // Find the 2nd slide (Event Highlights)
        const slides = modal.querySelectorAll('.modal-slide');
        if (slides.length < 2) return;
        const eventHighlightsSlide = slides[1];
        const carousel = eventHighlightsSlide.querySelector('.mobile-carousel');
        const images = carousel ? carousel.querySelectorAll('.carousel-img') : [];
        const dotsContainer = eventHighlightsSlide.querySelector('.mobile-carousel-dots');
        if (!carousel || images.length === 0 || !dotsContainer) return;

        // Remove any existing dots
        dotsContainer.innerHTML = '';
        // Create dots
        images.forEach((img, idx) => {
            const dot = document.createElement('span');
            dot.className = 'mobile-carousel-dot' + (idx === 0 ? ' active' : '');
            dot.addEventListener('click', () => setActiveImage(idx));
            dotsContainer.appendChild(dot);
        });

        // Show only the first image by default
        function setActiveImage(idx) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === idx);
            });
            const dots = dotsContainer.querySelectorAll('.mobile-carousel-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === idx);
            });
            carousel.dataset.active = idx;
        }
        setActiveImage(0);

        // Optionally, add swipe support (left/right)
        let startX = null;
        carousel.addEventListener('touchstart', e => {
            if (e.touches.length === 1) startX = e.touches[0].clientX;
        });
        carousel.addEventListener('touchend', e => {
            if (startX === null) return;
            const endX = e.changedTouches[0].clientX;
            const delta = endX - startX;
            let idx = parseInt(carousel.dataset.active || '0', 10);
            if (delta > 40 && idx > 0) setActiveImage(idx - 1);
            else if (delta < -40 && idx < images.length - 1) setActiveImage(idx + 1);
            startX = null;
        });

        // Reset to first image when modal opens or slide changes
        const observer = new MutationObserver(() => setActiveImage(0));
        observer.observe(modal, { attributes: true, attributeFilter: ['style'] });
    });
}

window.addEventListener('DOMContentLoaded', initMobileCarousels);
window.addEventListener('resize', initMobileCarousels); 
