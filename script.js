// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- For the Interactive Wish Card ---
    const quotes = [
        "🌞 Wishing you a day as sunny as your smile, as warm as your heart, and as wonderful as you are. Happy Birthday! 🎂✨",
        "🎉 Cheers to you for another trip around the sun! May your day be filled with cake 🍰, laughter 😂, and people who adore you 💕.",
        "💎 Happy Birthday! You're not getting older, you're just increasing in value. Here's to a priceless year ahead! 💖🎈",
        "☀️ May your life always be filled with sunshine, happiness, and the warmth of love. Have a magical birthday, Divya! 🧁🌷",
        "🌍 The world is a better place because you're in it. Thank you for being you. Keep shining bright this year and forever ✨❤️.",
        "💌 Sending you a birthday wish wrapped in love, tied with joy, and sealed with a smile 😊. Happy Birthday, my amazing friend! 💞",
        "🌟 Dream big and chase your passions. May this year bring you closer to everything your heart desires. You deserve the best! 🎯🎁",
        "🎀 I hope your birthday is full of your favorite songs, places, people, and smiles. You're the heart of so many beautiful memories 💫",
        "💕 Divya, you’re not just a friend—you’re a blessing. I feel lucky every day to know you. Happy Birthday from the bottom of my heart! 💖 – Vivek",
        "🌈 On this special day, I just want to say… you make the world a brighter place with your laugh, your strength, and your sparkle 💎💗 – With love, Vivek",
        "🥰 You’ve touched so many hearts—including mine. Here's to another year of inspiring smiles and unforgettable moments 💞🎊",
        "🎂 I hope this year unfolds like a dream for you, Divya. You're truly one in a million. Happiest of birthdays to you! 💐 – Vivek Pal",
        "💫 Divya, you light up every room you enter. I hope your birthday reflects the incredible light you bring into the world. 🌟🎉",
        "🕊️ Life is beautiful, and so are you. Keep living with that same grace, confidence, and love. Happy Birthday, my dearest friend! ❤️ – Vivek",
        "🌸 To the queen of kindness, laughter, and elegance—Happy Birthday, Divya! May all your dreams come true today and always. 💝"
    ];

    const quoteText = document.getElementById('quote-text');
    const quoteCard = document.getElementById('quote-card');
    const changeQuoteBtn = document.getElementById('change-quote-btn');
    let currentQuoteIndex = 0;

    // Function to change the quote
    function changeQuote() {
        // This ensures a new random quote that is not the same as the current one
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * quotes.length);
        } while (newIndex === currentQuoteIndex);
        currentQuoteIndex = newIndex;

        if (quoteCard && quoteText) {
            quoteCard.style.transform = 'scale(0.95)';
            quoteCard.style.opacity = '0.5';
            setTimeout(() => {
                quoteText.textContent = `"${quotes[currentQuoteIndex]}"`;
                quoteCard.style.transform = 'scale(1)';
                quoteCard.style.opacity = '1';
            }, 300);
        }
    }
    
    // Attach event listener to the button
    if (changeQuoteBtn) {
        changeQuoteBtn.addEventListener('click', changeQuote);
    }


    // --- For Fade-in Animations on Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('h1, h2, h3, p, div.grid > div, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });


    // --- For the Payment Modal Pop-up ---
    const showPaymentModalBtn = document.getElementById('show-payment-modal-btn');
    const paymentModal = document.getElementById('payment-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (showPaymentModalBtn) {
        showPaymentModalBtn.addEventListener('click', () => {
            if (paymentModal) {
                paymentModal.classList.remove('hidden');
            }
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if (paymentModal) {
                paymentModal.classList.add('hidden');
            }
        });
    }

    // Optional: Close modal if background is clicked
    if (paymentModal) {
        paymentModal.addEventListener('click', (event) => {
            if (event.target === paymentModal) {
                paymentModal.classList.add('hidden');
            }
        });
    }

});
