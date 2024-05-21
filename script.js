/*document.addEventListener("DOMContentLoaded", function() {
    const getStartedButton = document.querySelector('button');
    getStartedButton.addEventListener('click', () => {
        alert('Thank you for getting started!');
    });
});*/


/*
document.addEventListener('scroll', function() {
    const image = document.getElementById('movingElipse');
    // Get the current scroll position
    let scrollPos = window.scrollY;
    // Calculate an oscillating pattern
    let oscillate = Math.sin(scrollPos / 200) * 100; // 100 controls the frequency, 50 controls the amplitude
    // Apply the transformation
    image.style.transform = `translateY(${oscillate}px)`;
})
;
*/
// redirect for get started button
document.getElementById('get-started-button').addEventListener('click', function() {
    window.location.href = 'https://wa.me/447700161107';
});

document.getElementById('get-started-button-second').addEventListener('click', function() {
    window.location.href = 'https://wa.me/447700161107';
});

// redirect for contact button
document.getElementById('contact-button').addEventListener('click', function() {
    window.location.href = 'https://calendly.com/contact-hmmc/quick-intro-to-vinny';
});

document.getElementById('how-it-works-button').addEventListener('click', function() {
    window.location.href = '#how-it-works';
});

function toggleText(element) {
    const allDivs = document.querySelectorAll('.info-div');
    allDivs.forEach(div => {
        const chevron = div.querySelector('.chevron');
        const additionalText = div.querySelector('.additional-text');
        if (div === element) {
            // Toggle this div
            if (chevron.classList.contains('fa-chevron-down')) {
                chevron.classList.remove('fa-chevron-down');
                chevron.classList.add('fa-chevron-up');
                additionalText.classList.remove('hidden');
                additionalText.classList.add('shown');
            } else {
                chevron.classList.remove('fa-chevron-up');
                chevron.classList.add('fa-chevron-down');
                additionalText.classList.remove('shown');
                additionalText.classList.add('hidden');
            }
        } else {
            // Reset other divs
            chevron.classList.remove('fa-chevron-up');
            chevron.classList.add('fa-chevron-down');
            additionalText.classList.remove('shown');
            additionalText.classList.add('hidden');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('phone-popup').classList.remove('hidden');
    }, 15000); // 30 seconds

    document.getElementById('submit-phone').addEventListener('click', function() {
        const phoneNumber = document.getElementById('phone-number').value;
        if (phoneNumber) {
            alert(`Thank you! We have received your phone number: ${phoneNumber}`);
            document.getElementById('phone-popup').classList.add('hidden');
        } else {
            alert('Please enter a valid phone number.');
        }
    });
});