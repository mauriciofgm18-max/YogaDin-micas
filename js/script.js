document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Date in Top Bar
    const dateSpan = document.getElementById('current-date');
    if (dateSpan) {
        const today = new Date();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        dateSpan.textContent = today.toLocaleDateString('pt-BR', options);
    }

    // 2. FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            // Close others (optional, but requested "Accordion" usually implies this or independent)
            // Let's keep them independent for better UX on mobile so users don't lose context

            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                icon.classList.replace('ph-caret-up', 'ph-caret-down');
            } else {
                answer.classList.add('show');
                icon.classList.replace('ph-caret-down', 'ph-caret-up');
            }
        });
    });

    // 3. Carousel Logic
    // We have two carousels: Recipes and Proof
    setupCarousel('recipe-track', 'recipe-prev', 'recipe-next');
    setupCarousel('proof-track', 'proof-prev', 'proof-next');

    function setupCarousel(trackId, prevBtnId, nextBtnId) {
        const track = document.getElementById(trackId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);

        if (!track || !prevBtn || !nextBtn) return;

        let scrollAmount = 0;
        const cardWidth = 316; // 300px width + 16px gap approximately

        nextBtn.addEventListener('click', () => {
            track.scrollTo({
                top: 0,
                left: track.scrollLeft + cardWidth,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollTo({
                top: 0,
                left: track.scrollLeft - cardWidth,
                behavior: 'smooth'
            });
        });
    }

    // 4. Smooth Scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // 5. Scroll Animations (IntersectionObserver)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    // 6. Live Buyer Count
    const buyerCountEl = document.getElementById('buyer-count');
    if (buyerCountEl) {
        // Start between 100-120
        let currentBuyers = Math.floor(Math.random() * 20) + 100;
        buyerCountEl.innerText = currentBuyers;

        setInterval(() => {
            // Increase by 1-3, occasionally decrease by 1
            const change = Math.random() > 0.85 ? -1 : Math.floor(Math.random() * 3) + 1;
            currentBuyers = Math.max(100, currentBuyers + change); // Never go below 100
            buyerCountEl.innerText = currentBuyers;
        }, 3500);
    }

    // 7. Purchase Notification Toasts
    const names = ['Ana P.', 'Mariana S.', 'Carla M.', 'Juliana R.', 'Fernanda L.', 'Beatriz C.', 'Patrícia O.'];
    const locations = ['São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Curitiba, PR', 'Porto Alegre, RS', 'Salvador, BA'];

    function showToast() {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const name = names[Math.floor(Math.random() * names.length)];
        const location = locations[Math.floor(Math.random() * locations.length)];

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="ph-fill ph-check-circle"></i>
            </div>
            <div class="toast-content">
                <span class="toast-title">${name} acabou de comprar!</span>
                <span class="toast-message">${location} - Há 2 minutos</span>
            </div>
        `;

        container.appendChild(toast);

        // Remove from DOM after animation (5s total, wait 5.5s to be safe)
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 5500);
    }

    // Initial delay then variable intervals
    setTimeout(() => {
        showToast();
        setInterval(() => {
            // Random interval between 8 and 20 seconds
            if (Math.random() > 0.3) showToast();
        }, 12000);
    }, 5000);


    // 8. 3D Book Animation on Scroll (Mobile)
    const bookContainer = document.querySelector('.mockup-container');
    const book = document.querySelector('.book-3d');

    if (bookContainer && book) {
        window.addEventListener('scroll', () => {
            const rect = bookContainer.getBoundingClientRect();
            // Calculate a value between 0 and 1 based on viewport position
            // When it's in the center of the screen
            const viewportHeight = window.innerHeight;

            // Only animate if visible in viewport
            if (rect.top < viewportHeight && rect.bottom > 0) {
                // Map the scroll position to rotation
                // Center of element relative to center of viewport
                const centerOffset = (rect.top + rect.height / 2) - (viewportHeight / 2);
                const percent = centerOffset / (viewportHeight / 2); // -1 to 1 aprox

                // Rotate based on scroll: range -15deg to -45deg
                const rotation = -30 + (percent * 15);

                // Only apply nicely if touch device (simulated check here or CSS media query logic preference)
                // But user asked for mobile scroll specifically. Let's apply generally as it looks cool everywhere.
                // However, on desktop we have the hover effect. We should check media query.
                if (window.matchMedia("(hover: none)").matches) {
                    book.style.transform = `rotateY(${rotation}deg) rotateX(10deg)`;
                }
            }
        });
    }

    // 9. VSL Viewer Counter
    const viewerCountEl = document.getElementById('viewer-count');
    if (viewerCountEl) {
        // Start random between 200 and 230
        let currentViewers = Math.floor(Math.random() * 30) + 200;
        viewerCountEl.innerText = currentViewers;

        setInterval(() => {
            // Add 1-3 viewers
            const increase = Math.floor(Math.random() * 3) + 1;
            // Occasionally drop 1 to look natural
            const change = Math.random() > 0.8 ? -1 : increase;

            currentViewers += change;
            viewerCountEl.innerText = currentViewers;
        }, 4000); // Update every 4 seconds
    }

    // 10. Offer Countdown (23 minutes)
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        let timeLeft = 23 * 60; // 23 minutes in seconds

        const timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                countdownEl.innerText = "00:00";
                return;
            }

            timeLeft--;

            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;

            const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

            countdownEl.innerText = `${displayMinutes}:${displaySeconds}`;
        }, 1000);
    }

    // 11. Testimonial Slideshow
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function showSlide(index) {
        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto advance every 4 seconds
    if (slides.length > 0) {
        setInterval(nextSlide, 4000);

        // Allow manual click on indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    }

});
