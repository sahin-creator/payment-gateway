document.addEventListener('DOMContentLoaded', () => {
    const cardButton = document.getElementById('card-payment');
    const netbankingButton = document.getElementById('netbanking-payment');
    const upiButton = document.getElementById('upi-payment');
    const walletButton = document.getElementById('wallet-payment');
    const paytmButton = document.getElementById('paytm-payment');
    const phonepeButton = document.getElementById('phonepe-payment');

    const cardModal = document.getElementById('card-modal');
    const cardCloseButton = document.getElementById('card-modal-close');
    const cardForm = document.getElementById('card-form');
    const paymentStatus = document.getElementById('payment-status');

    const netbankingModal = document.getElementById('netbanking-modal');
    const netbankingCloseButton = document.getElementById('netbanking-modal-close');
    const bankList = document.getElementById('bank-list');

    const upiModal = document.getElementById('upi-modal');
    const upiCloseButton = document.getElementById('upi-modal-close');
    const upiForm = document.getElementById('upi-form');

    cardButton.addEventListener('click', () => {
        cardModal.style.display = 'block';
    });

    cardCloseButton.addEventListener('click', () => {
        cardModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cardModal) {
            cardModal.style.display = 'none';
        }
    });

    cardForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Simulating a successful payment
        paymentStatus.textContent = 'Payment successful!';
        cardModal.style.display = 'none';
    });

    netbankingButton.addEventListener('click', () => {
        netbankingModal.style.display = 'block';
    });

    netbankingCloseButton.addEventListener('click', () => {
        netbankingModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === netbankingModal) {
            netbankingModal.style.display = 'none';
        }
    });

    upiButton.addEventListener('click', () => {
        upiModal.style.display = 'block';
    });

    upiCloseButton.addEventListener('click', () => {
        upiModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === upiModal) {
            upiModal.style.display = 'none';
        }
    });

    upiForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Here you can implement UPI payment verification logic
        // For demonstration, simulate a successful payment
        paymentStatus.textContent = 'UPI payment verified and successful!';
        upiModal.style.display = 'none';
    });

    // Event listeners for wallet options (Paytm and PhonePe)
    walletButton.addEventListener('click', () => {
        const walletOptions = document.querySelector('.wallet-options');
        walletOptions.style.display = (walletOptions.style.display === 'none' || walletOptions.style.display === '') ? 'flex' : 'none';
    });

    paytmButton.addEventListener('click', () => {
        paymentStatus.textContent = 'Initiating Paytm payment...'; // Replace with actual implementation
    });

    phonepeButton.addEventListener('click', () => {
        paymentStatus.textContent = 'Initiating PhonePe payment...'; // Replace with actual implementation
    });

    // Event listeners for bank options
    const bankOptions = bankList.querySelectorAll('.bank-option');
    bankOptions.forEach((option) => {
        option.addEventListener('click', () => {
            paymentStatus.textContent = `Initiating payment via ${option.textContent}...`; // Replace with actual implementation
        });
    });
});
