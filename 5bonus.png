document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const TIMER_KEY = "oferta_especial_timerEnd";
    const EXPIRE_MINUTES = 20;

    // We have two timers on the screen now (the small top-bar one, and the big central one)
    const timerDisplay = document.getElementById("timer");
    const bigTimerDisplay = document.getElementById("big-timer-display");
    const overlay = document.getElementById("expired-overlay");

    if (!timerDisplay && !bigTimerDisplay) return;

    // Check if user already saw the timer in LocalStorage
    let endTime = localStorage.getItem(TIMER_KEY);

    if (!endTime) {
        // Set new end time from now - exactly 20 minutes ahead
        const now = new Date().getTime();
        endTime = now + (EXPIRE_MINUTES * 60 * 1000);
        localStorage.setItem(TIMER_KEY, endTime.toString());
    } else {
        endTime = parseInt(endTime, 10);
    }

    function showExpired() {
        if (overlay) {
            overlay.classList.remove("hidden");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        }
    }

    // Pre-declare interval so it can be cleared inside the function
    let timerInterval;

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            if (timerDisplay) timerDisplay.textContent = "00:00";
            if (bigTimerDisplay) bigTimerDisplay.textContent = "00:00";
            showExpired();
            if (timerInterval) clearInterval(timerInterval);
            return;
        }

        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timerDisplay) timerDisplay.textContent = formattedTime;
        if (bigTimerDisplay) bigTimerDisplay.textContent = formattedTime;
    }

    // Execute immediately so there's no 1-second delay 
    updateTimer();
    // Then run every 1 second
    timerInterval = setInterval(updateTimer, 1000);

    // Warn the user contextually before they exit
    window.addEventListener("beforeunload", function (e) {
        if (new Date().getTime() < endTime) {
            e.preventDefault();
            e.returnValue = "Tem certeza? Essa oferta é única e desaparecerá se você sair agora!";
            return e.returnValue;
        }
    });

    // Make CTA buttons pulse visually
    const btnPremium = document.getElementById("btn-premium");
    if (btnPremium) {
        setInterval(() => {
            btnPremium.style.transform = "scale(1.05)";
            setTimeout(() => { btnPremium.style.transform = "scale(1)"; }, 200);
        }, 3000);
    }
});
