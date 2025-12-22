document.addEventListener('DOMContentLoaded', () => {
    // Initialize Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-up');
    animatedElements.forEach(el => observer.observe(el));

    // Scroll Progress Bar
    const progressEl = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;

        if (progressEl) {
            progressEl.style.width = scrolled + '%';
        }
    });

    // FAQs Animation fix (smooth opening)
    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            // Close all other details
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });

    // Update Date in Banner
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const today = new Date();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        dateElement.textContent = today.toLocaleDateString('pt-BR', options);
    }
    // Live Counter Simulation
    const counterElement = document.getElementById('live-counter');
    if (counterElement) {
        let currentCount = 5842;

        // Randomly update the count
        setInterval(() => {
            const change = Math.floor(Math.random() * 5) - 1; // -1 to +3 (mostly growing)
            currentCount += change;

            // Format number (PT-BR style)
            counterElement.textContent = currentCount.toLocaleString('pt-BR');
        }, 3500); // Update every 3.5 seconds
    }

    // Purchase Notification Logic
    const toast = document.getElementById('toast');
    const toastName = document.getElementById('toast-name');
    const toastLocation = document.getElementById('toast-location');

    if (toast && toastName && toastLocation) {
        const names = [
            "Ana", "Beatriz", "Carlos", "Daniel", "Eduarda", "Felipe", "Gabriela",
            "Hugo", "Isabela", "João", "Karina", "Lucas", "Mariana", "Nicolas",
            "Otávio", "Paula", "Rafael", "Sofia", "Thiago", "Vitória"
        ];

        const locations = [
            "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG",
            "Curitiba, PR", "Porto Alegre, RS", "Brasília, DF", "Salvador, BA",
            "Fortaleza, CE", "Recife, PE", "Goiânia, GO", "Campinas, SP",
            "Florianópolis, SC", "Vitória, ES", "Manaus, AM"
        ];

        function showToast() {
            // Randomize data
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];

            toastName.textContent = randomName;
            toastLocation.textContent = randomLocation;

            // Show
            toast.classList.add('visible');

            // Hide after 5 seconds
            setTimeout(() => {
                toast.classList.remove('visible');
            }, 5000);

            // Schedule next
            const nextTime = Math.random() * (15000 - 8000) + 8000; // 8 to 15 seconds
            setTimeout(showToast, nextTime);
        }

        // Start strictly after a few seconds
        setTimeout(showToast, 4000);
    }

    // Upsell Popup Functions
    let countdownInterval;

    window.openUpsellPopup = function (event) {
        event.preventDefault();
        const modal = document.getElementById('upsellModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        startCountdown();
    };

    window.closeUpsellPopup = function () {
        const modal = document.getElementById('upsellModal');
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        clearInterval(countdownInterval);
    };

    function startCountdown() {
        let totalSeconds = 3 * 60; // 3 minutes

        countdownInterval = setInterval(() => {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;

            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

            if (totalSeconds <= 0) {
                clearInterval(countdownInterval);
                closeUpsellPopup();
            }

            totalSeconds--;
        }, 1000);
    }
});
