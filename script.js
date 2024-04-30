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
