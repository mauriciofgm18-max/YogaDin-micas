document.addEventListener('DOMContentLoaded', () => {

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-trigger').forEach(el => {
        observer.observe(el);
    });

    // Purchase Notifications (Social Proof)
    const notifications = [
        { name: 'Maria Silva', city: 'São Paulo, SP', plan: 'Premium', time: '2 minutos atrás' },
        { name: 'Ana Costa', city: 'Rio de Janeiro, RJ', plan: 'Premium', time: '5 minutos atrás' },
        { name: 'Juliana Santos', city: 'Belo Horizonte, MG', plan: 'Básico', time: '8 minutos atrás' },
        { name: 'Carla Oliveira', city: 'Curitiba, PR', plan: 'Premium', time: '12 minutos atrás' },
        { name: 'Beatriz Lima', city: 'Porto Alegre, RS', plan: 'Premium', time: '15 minutos atrás' }
    ];

    let notificationIndex = 0;
    const container = document.getElementById('notification-container');

    function showNotification() {
        if (notificationIndex >= notifications.length) {
            notificationIndex = 0; // Loop back to start
        }

        const notif = notifications[notificationIndex];

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'bg-white rounded-xl shadow-2xl p-4 max-w-sm pointer-events-auto transform translate-x-[-120%] transition-all duration-500 border-l-4 border-green-500';

        notification.innerHTML = `
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-check text-green-600"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="font-bold text-sm text-slate-900">${notif.name}</p>
                    <p class="text-xs text-slate-600">Comprou o plano <span class="font-semibold text-brand-DEFAULT">${notif.plan}</span></p>
                    <p class="text-xs text-slate-500 mt-1">
                        <i class="fa-solid fa-location-dot text-brand-DEFAULT"></i> ${notif.city}
                    </p>
                    <p class="text-xs text-slate-400 mt-1">${notif.time}</p>
                </div>
                <button class="text-slate-400 hover:text-slate-600 transition-colors" onclick="this.parentElement.parentElement.remove()">
                    <i class="fa-solid fa-times"></i>
                </button>
            </div>
        `;

        container.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(-120%)';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 5000);

        notificationIndex++;
    }

    // Show first notification after 3 seconds
    setTimeout(() => {
        showNotification();
        // Then show one every 3 seconds
        setInterval(showNotification, 8000); // 8 seconds interval (5s display + 3s wait)
    }, 3000);

    // Smooth Scroll Animation (Custom - Slower and Smoother)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return; // Skip empty anchors

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smooth scroll with custom animation
                const offset = 80; // Height of sticky banner
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1500; // 1.5 seconds for smooth transition
                let start = null;

                // Easing function for smooth animation
                const easeInOutCubic = (t) => {
                    return t < 0.5
                        ? 4 * t * t * t
                        : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };

                const animation = (currentTime) => {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const ease = easeInOutCubic(progress);

                    window.scrollTo(0, startPosition + (distance * ease));

                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                };

                requestAnimationFrame(animation);
            }
        });
    });

    // FAQ Accordion
    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('i');

            // Toggle current
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close others (optional, but good UX)
                document.querySelectorAll('.faq-content').forEach(el => el.style.maxHeight = null);
                document.querySelectorAll('.faq-btn i').forEach(el => el.style.transform = 'rotate(0deg)');

                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Testimonial Slider Navigation
    const slider = document.getElementById('testimonial-slider');
    const dots = document.querySelectorAll('[aria-label^="Slide"]');

    if (slider && dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const cardWidth = slider.querySelector('div').offsetWidth;
                const gap = 24; // gap-6 is 1.5rem = 24px
                slider.scrollTo({
                    left: index * (cardWidth + gap),
                    behavior: 'smooth'
                });

                // Update active dot
                dots.forEach(d => d.classList.replace('bg-brand-DEFAULT', 'bg-slate-300'));
                dot.classList.replace('bg-slate-300', 'bg-brand-DEFAULT');
            });
        });

        // Update dots on scroll
        slider.addEventListener('scroll', () => {
            const cardWidth = slider.querySelector('div').offsetWidth + 24;
            const index = Math.round(slider.scrollLeft / cardWidth);

            if (dots[index]) {
                dots.forEach(d => d.classList.replace('bg-brand-DEFAULT', 'bg-slate-300'));
                dots[index].classList.replace('bg-slate-300', 'bg-brand-DEFAULT');
            }
        });

        // Autoplay functionality
        let currentIndex = 0;
        let autoplayInterval;

        const autoplay = () => {
            currentIndex = (currentIndex + 1) % dots.length; // Loop back to 0 after last slide
            const cardWidth = slider.querySelector('div').offsetWidth;
            const gap = 24;

            slider.scrollTo({
                left: currentIndex * (cardWidth + gap),
                behavior: 'smooth'
            });

            // Update active dot
            dots.forEach(d => d.classList.replace('bg-brand-DEFAULT', 'bg-slate-300'));
            dots[currentIndex].classList.replace('bg-slate-300', 'bg-brand-DEFAULT');
        };

        // Start autoplay (change slide every 5 seconds)
        autoplayInterval = setInterval(autoplay, 5000);

        // Pause autoplay on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });

        // Resume autoplay on mouse leave
        slider.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(autoplay, 5000);
        });

        // Pause autoplay when user manually clicks a dot
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                clearInterval(autoplayInterval);
                // Resume after 10 seconds of inactivity
                setTimeout(() => {
                    autoplayInterval = setInterval(autoplay, 5000);
                }, 10000);
            });
        });
    }

});
