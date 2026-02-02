document.addEventListener('DOMContentLoaded', () => {

    // --- SCROLL REVEAL ANIMATIONS ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animates only once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-right, .fade-left');
    animatedElements.forEach(el => observer.observe(el));


    // --- FAQ ACCORDION ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const content = header.nextElementSibling;
            const icon = header.querySelector('i.fa-chevron-down, i.fa-chevron-up');

            // Close other items (Optional: "Accordian-style" behavior)
            const activeItem = document.querySelector('.accordion-item.active');
            if (activeItem && activeItem !== accordionItem) {
                activeItem.classList.remove('active');
                activeItem.querySelector('.accordion-content').style.height = '0';
                const activeIcon = activeItem.querySelector('.accordion-header i');
                activeIcon.classList.remove('fa-chevron-up');
                activeIcon.classList.add('fa-chevron-down');
            }

            // Toggle current item
            accordionItem.classList.toggle('active');

            if (accordionItem.classList.contains('active')) {
                content.style.height = content.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                content.style.height = '0';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });

    // --- BUTTON MICRO-INTERACTIONS ---
    const buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function (e) {
            // Optional: Add a subtle scale pop via JS or ensure CSS handles it well
            // Currently CSS scale transformation is sufficient
        });

        // Click Ripple Effect
        btn.addEventListener('click', function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
        });
    });

    // --- COUNTDOWN TIMER (20 MINUTES) ---
    const timerElement = document.getElementById('offer-countdown');
    if (timerElement) {
        let timeInSeconds = 20 * 60; // 20 minutes

        const updateTimer = () => {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;

            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

            timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;

            if (timeInSeconds > 0) {
                timeInSeconds--;
            } else {
                // Optional: Restart or stop
                // timeInSeconds = 20 * 60; // Restart loop
            }
        };

        setInterval(updateTimer, 1000);
        updateTimer(); // Initial call
    }

    // --- SALES NOTIFICATIONS ---
    const salesData = [
        { name: "Mariana S.", location: "São Paulo, SP" },
        { name: "Fernanda L.", location: "Rio de Janeiro, RJ" },
        { name: "Patrícia M.", location: "Belo Horizonte, MG" },
        { name: "Camila R.", location: "Curitiba, PR" },
        { name: "Juliana K.", location: "Porto Alegre, RS" },
        { name: "Beatriz A.", location: "Salvador, BA" }
    ];

    const notificationContainer = document.createElement('div');
    notificationContainer.className = 'sales-notification';
    document.body.appendChild(notificationContainer);

    // Placeholder image logic - using standard avatar placeholder logic
    const getAvatarUrl = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=00a86b&color=fff&size=50`;

    const showNotification = () => {
        const randomUser = salesData[Math.floor(Math.random() * salesData.length)];
        const timeAgo = Math.floor(Math.random() * 5) + 1; // 1 to 5 minutes ago

        notificationContainer.innerHTML = `
            <img src="${getAvatarUrl(randomUser.name)}" alt="${randomUser.name}">
            <div class="sales-notification-content">
                <h4>${randomUser.name}</h4>
                <p>Comprou <b>Produzindo Textos</b></p>
                <span class="time-ago">${randomUser.location} • Há ${timeAgo} min</span>
            </div>
        `;

        // Show Animation
        setTimeout(() => {
            notificationContainer.classList.add('show');
        }, 100);

        // Hide Animation
        setTimeout(() => {
            notificationContainer.classList.remove('show');
        }, 5000); // Visible for 5 seconds
    };

    // Notification Loop
    const startNotificationLoop = () => {
        // Initial delay
        setTimeout(() => {
            showNotification();

            // Interval loop (randomized between 10s and 25s)
            setInterval(() => {
                showNotification();
            }, Math.random() * (25000 - 15000) + 15000);

        }, 5000); // Start 5 seconds after load
    };

    startNotificationLoop();

    // --- TESTIMONIALS CAROUSEL NAVIGATION ---
    const track = document.querySelector('.testimonials-track');
    const nextBtn = document.querySelector('.carousel-control.next');
    const prevBtn = document.querySelector('.carousel-control.prev');

    if (track && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: 300, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }

    // --- AUTO-FADE CAROUSEL (ONE BY ONE) ---
    const carouselContainer = document.getElementById('auto-carousel');
    if (carouselContainer) {
        const slides = carouselContainer.querySelectorAll('.carousel-slide');
        const prevBtn = carouselContainer.querySelector('.prev-btn');
        const nextBtn = carouselContainer.querySelector('.next-btn');
        let currentSlide = 0;
        let slideInterval;

        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            currentSlide = index;
        };

        const nextSlide = () => {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        };

        const prevSlide = () => {
            let prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        };

        const startAutoSlide = () => {
            slideInterval = setInterval(nextSlide, 3000);
        };

        const resetAutoSlide = () => {
            clearInterval(slideInterval);
            startAutoSlide();
        };

        if (slides.length > 0) {
            startAutoSlide();

            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    nextSlide();
                    resetAutoSlide();
                });
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    prevSlide();
                    resetAutoSlide();
                });
            }
        }
    }

});
