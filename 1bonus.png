// Inicializa Lucide Icons
lucide.createIcons();

// Accordion Logic
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const item = button.parentElement;
        const icon = button.querySelector('.accordion-icon');

        // Close all other
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== accordionContent) {
                content.style.maxHeight = null;
                content.parentElement.querySelector('.accordion-header').classList.remove('active');
                // if in FAQ change minus to plus
                let otherIcon = content.parentElement.querySelector('.accordion-icon');
                if (otherIcon.getAttribute('data-lucide') === 'minus') {
                    otherIcon.setAttribute('data-lucide', 'plus');
                    lucide.createIcons();
                }
            }
        });

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            if (icon.getAttribute('data-lucide') === 'plus') {
                icon.setAttribute('data-lucide', 'minus');
                lucide.createIcons();
            }
        } else {
            accordionContent.style.maxHeight = null;
            if (icon.getAttribute('data-lucide') === 'minus') {
                icon.setAttribute('data-lucide', 'plus');
                lucide.createIcons();
            }
        }
    });
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// Trigger once on load
reveal();

// Testimonials Auto Scroll by Card
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        let scrollInterval;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                const card = carousel.querySelector('.testimonial-card');
                if (!card) return;

                const cardWidth = card.offsetWidth;
                const gap = parseFloat(getComputedStyle(carousel).gap) || 32;
                const scrollAmount = cardWidth + gap;

                // If we reached the end, scroll back to 0
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }, 3000); // Pass a card every 3 seconds
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        // Pause on interaction
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);
        carousel.addEventListener('touchstart', stopAutoScroll);
        carousel.addEventListener('touchend', startAutoScroll);

        startAutoScroll();
    }
});

// Top Banner Countdown Logic (Sticky)
document.addEventListener('DOMContentLoaded', () => {
    const countdownEl = document.getElementById('top-countdown');
    if (!countdownEl) return;

    const storageKey = 'massagem_offer_end_time';
    const hoursToCount = 6;

    // Check if there is an existing end time in localStorage
    let endTime = localStorage.getItem(storageKey);

    if (!endTime) {
        // If not, create a new one (Current time + 6 hours)
        endTime = new Date().getTime() + (hoursToCount * 60 * 60 * 1000);
        localStorage.setItem(storageKey, endTime);
    } else {
        endTime = parseInt(endTime);
    }

    const updateTimer = () => {
        const now = new Date().getTime();
        let distance = endTime - now;

        // If time ran out, keep it at 0 or let it restart. Restarting for maximum urgency:
        if (distance < 0) {
            endTime = new Date().getTime() + (hoursToCount * 60 * 60 * 1000);
            localStorage.setItem(storageKey, endTime);
            distance = endTime - now;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.innerHTML =
            (hours < 10 ? "0" + hours : hours) + ":" +
            (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds);
    };

    updateTimer();
    setInterval(updateTimer, 1000);
});

// ══════════════════════════════════════
// ANIMATION 1 — Hero Floating Particles
// ══════════════════════════════════════
(function () {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'hero-canvas';
    hero.insertBefore(canvas, hero.firstChild);

    const ctx = canvas.getContext('2d');
    let W, H;
    const particles = [];
    const COLORS = ['rgba(255,215,0,', 'rgba(202,21,40,', 'rgba(255,190,80,'];

    function resize() {
        W = canvas.width = hero.offsetWidth;
        H = canvas.height = hero.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 45; i++) {
        particles.push({
            x: Math.random() * 1500,
            y: Math.random() * 900,
            r: Math.random() * 1.8 + 0.4,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            alpha: Math.random() * 0.35 + 0.05,
            speed: Math.random() * 0.55 + 0.2,
            drift: (Math.random() - 0.5) * 0.35,
        });
    }

    (function loop() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color + p.alpha + ')';
            ctx.fill();
            p.y -= p.speed;
            p.x += p.drift;
            if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; p.alpha = Math.random() * 0.35 + 0.05; }
        });
        requestAnimationFrame(loop);
    })();
})();

// ══════════════════════════════════════
// ANIMATION 2 — Magnetic Buttons + Ripple
// ══════════════════════════════════════
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const cx = e.clientX - r.left - r.width / 2;
        const cy = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${cx * 0.18}px, ${cy * 0.18}px) translateY(-3px) scale(1.03)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });

    btn.addEventListener('click', e => {
        const r = btn.getBoundingClientRect();
        const size = Math.max(r.width, r.height);
        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px;`;
        btn.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });
});

// ══════════════════════════════════════
// ANIMATION 3 — Cursor Glow Trail
// ══════════════════════════════════════
(function () {
    if (window.matchMedia('(hover: none)').matches) return;
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);
    let mx = -999, my = -999;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function track() {
        glow.style.left = mx + 'px';
        glow.style.top = my + 'px';
        requestAnimationFrame(track);
    })();
})();

// ── Purchase Notifications ──
(function () {
    const purchases = [
        { name: 'Ana C.', city: 'São Paulo, SP', time: 'agora mesmo' },
        { name: 'Rodrigo M.', city: 'Rio de Janeiro, RJ', time: 'há 2 minutos' },
        { name: 'Juliana F.', city: 'Belo Horizonte, MG', time: 'há 4 minutos' },
        { name: 'Carlos T.', city: 'Curitiba, PR', time: 'há 6 minutos' },
        { name: 'Fernanda L.', city: 'Fortaleza, CE', time: 'há 8 minutos' },
        { name: 'Lucas B.', city: 'Salvador, BA', time: 'há 10 minutos' },
        { name: 'Mariana S.', city: 'Porto Alegre, RS', time: 'há 12 minutos' },
        { name: 'Diego P.', city: 'Recife, PE', time: 'há 14 minutos' },
    ];

    let index = 0;

    function showToast() {
        const p = purchases[index % purchases.length];
        index++;

        const toast = document.createElement('div');
        toast.className = 'purchase-toast';
        toast.innerHTML = `<div class="purchase-toast-dot"></div>${p.name} acabou de comprar o curso`;

        document.body.appendChild(toast);

        // Hide after 4s, then remove
        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 450);
        }, 4000);
    }

    // First notification after 3s, then every 6–9s randomly
    setTimeout(function loop() {
        showToast();
        setTimeout(loop, 6000 + Math.random() * 3000);
    }, 3000);
})();
