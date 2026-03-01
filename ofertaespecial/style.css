:root {
    --black-1: #0B0B0B;
    --black-2: #161616;
    --red-deep: #8B0000;
    --red-cta: #FF0000;
    --gold: #FFD700;
    --white: #F3F3F3;
    --font-title: 'Playfair Display SC', serif;
    --font-sub: 'Cormorant Upright', serif;
    --font-body: 'Manrope', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--black-1);
    color: var(--white);
    font-family: var(--font-body);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    padding-top: 60px; /* Space for top bar */
}

/* Animations */
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes pulseGlow {
    0% { box-shadow: 0 0 15px rgba(177, 18, 18, 0.3); }
    50% { box-shadow: 0 0 35px rgba(177, 18, 18, 0.6); }
    100% { box-shadow: 0 0 15px rgba(177, 18, 18, 0.3); }
}

@keyframes pulseRed {
    0% { background-color: rgba(255, 0, 0, 0.1); }
    50% { background-color: rgba(255, 0, 0, 0.3); }
    100% { background-color: rgba(255, 0, 0, 0.1); }
}

.reveal {
    animation: fadeUp 1s ease-out both;
}

.text-center { text-align: center; }
.text-gold { color: var(--gold); }

/* Top Bar */
.top-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(90deg, #871422, #ca1528, #871422);
    color: #FFFFFF;
    text-align: center;
    padding: 12px 1rem;
    font-size: clamp(0.75rem, 1.8vw, 0.95rem);
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    z-index: 9999;
}

.timer {
    color: var(--gold);
    font-weight: 800;
    font-size: 1.1em;
    letter-spacing: 1px;
}

.container {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 0;
}

/* Header Section */
.header {
    margin-bottom: 3rem;
}

.title {
    font-family: var(--font-title);
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: var(--gold);
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.subtitle {
    font-family: var(--font-sub);
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    color: rgba(243, 243, 243, 0.9);
    margin-bottom: 2rem;
    font-style: italic;
}

.highlight-box {
    background: rgba(177, 18, 18, 0.15);
    border: 1px solid var(--red-cta);
    padding: 1.5rem;
    border-radius: 12px;
    font-size: clamp(1rem, 2vw, 1.2rem);
    animation: pulseRed 3s infinite;
}

.highlight-box span {
    color: var(--gold);
    font-weight: 800;
}

.highlight-box strong {
    color: var(--red-cta);
    font-size: 1.2em;
}

/* Benefits Section */
.benefits-section {
    margin-bottom: 3rem;
}

.benefits-card {
    background: var(--black-2);
    border: 1px solid rgba(198, 166, 75, 0.3);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.benefits-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.benefits-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: rgba(243, 243, 243, 0.9);
}

.benefits-list li.highlight-item {
    font-size: 1.2em;
    color: var(--gold);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1rem;
    margin-bottom: 0.5rem;
}

.benefits-list .plus {
    color: var(--white);
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border-left: 3px solid var(--gold);
}

.icon-gold { color: var(--gold); flex-shrink: 0; }
.icon-red { color: var(--red-cta); flex-shrink: 0; }

.badge {
    background: rgba(198, 166, 75, 0.2);
    color: var(--gold);
    font-size: 0.75rem;
    padding: 2px 8px;
    border-radius: 12px;
    margin-left: auto;
    text-transform: uppercase;
    font-weight: bold;
}

/* Comparison Section */
.comparison-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
}

@media (min-width: 600px) {
    .comparison-section {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
}

.plan-card {
    background: var(--black-2);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    position: relative;
}

.plan-card.basic {
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: 0.8;
}

.plan-card.premium {
    border: 2px solid var(--gold);
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(198, 166, 75, 0.15);
    z-index: 2;
}

.recommended-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--gold);
    color: var(--black-1);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    box-shadow: 0 5px 15px rgba(198, 166, 75, 0.4);
}

.plan-card h3 {
    font-family: var(--font-title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.plan-card.premium h3 {
    color: var(--gold);
}

.plan-card .price {
    font-size: 2.5rem;
    font-weight: 800;
    font-family: var(--font-title);
    margin-bottom: 0.2rem;
}

.plan-card.basic .price { color: var(--white); }
.plan-card.premium .price { color: var(--red-cta); }

.payment-type {
    font-size: 0.85rem;
    text-transform: uppercase;
    opacity: 0.7;
    margin-bottom: 1.5rem;
}

.features {
    font-weight: bold;
    color: var(--gold);
}

/* Decision Section */
.decision-section {
    max-width: 650px;
    margin: 0 auto;
}

.decision-text {
    font-size: clamp(1rem, 2vw, 1.1rem);
    line-height: 1.6;
    margin-bottom: 2rem;
}

.btn-primary {
    display: block;
    width: 100%;
    background-color: var(--red-cta);
    color: var(--white);
    font-family: var(--font-body);
    font-weight: 800;
    font-size: clamp(1rem, 2vw, 1.3rem);
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.2rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 30px rgba(177, 18, 18, 0.4);
    transition: all 0.3s ease;
    animation: pulseGlow 2s infinite;
    margin-bottom: 1.5rem;
}

.btn-primary:hover {
    transform: translateY(-3px) scale(1.02);
    background-color: #d11515;
}

.btn-secondary {
    display: inline-block;
    color: rgba(243, 243, 243, 0.6);
    text-decoration: underline;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.btn-secondary:hover {
    color: var(--white);
}

/* Overlay Expired */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(11, 11, 11, 0.95);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    opacity: 1;
    transition: opacity 0.5s ease;
}

.overlay.hidden {
    opacity: 0;
    pointer-events: none;
}

.overlay-content {
    background: var(--black-2);
    padding: 3rem 2rem;
    border-radius: 20px;
    border: 1px solid var(--red-deep);
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
}

.expired-icon {
    width: 60px;
    height: 60px;
    color: var(--red-cta);
    margin-bottom: 1rem;
}

.overlay-content h2 {
    font-family: var(--font-title);
    color: var(--white);
    margin-bottom: 1rem;
    font-size: 2rem;
}

.overlay-content p {
    margin-bottom: 2rem;
    color: rgba(243, 243, 243, 0.8);
}

.btn-primary-small {
    display: inline-block;
    background-color: var(--gold);
    color: var(--black-1);
    font-weight: bold;
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    border-radius: 20px;
    transition: transform 0.3s;
}

.btn-primary-small:hover {
    transform: translateY(-2px);
}
