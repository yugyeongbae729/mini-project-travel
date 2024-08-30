document.addEventListener('DOMContentLoaded', function() {
    console.log('Page Loaded');
});




document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.banner-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});