document.addEventListener('DOMContentLoaded', function() {
    const airdrops = document.querySelectorAll('.featured-airdrop');
    let currentIndex = 0;
    let interval;

    // Arrow buttons
    const leftArrow = document.querySelector('.prev-arrow');
    const rightArrow = document.querySelector('.next-arrow');

    // Show a specific airdrop
    function showAirdrop(index) {
        airdrops.forEach((airdrop, i) => {
            airdrop.style.display = i === index ? 'block' : 'none';
        });
    }

    // Move to the next airdrop
    function nextAirdrop() {
        currentIndex = (currentIndex + 1) % airdrops.length;
        showAirdrop(currentIndex);
    }

    // Move to the previous airdrop
    function prevAirdrop() {
        currentIndex = (currentIndex - 1 + airdrops.length) % airdrops.length;
        showAirdrop(currentIndex);
    }

    // Start the automatic slideshow
    function startSlideshow() {
        interval = setInterval(nextAirdrop, 3000); // Change image every 3 seconds
    }

    // Stop the automatic slideshow
    function stopSlideshow() {
        clearInterval(interval);
    }

    // Event listeners for manual navigation
    leftArrow.addEventListener('click', function() {
        stopSlideshow();
        prevAirdrop();
        startSlideshow();
    });

    rightArrow.addEventListener('click', function() {
        stopSlideshow();
        nextAirdrop();
        startSlideshow();
    });

    // Initialize slideshow
    showAirdrop(currentIndex); // Show the first image initially
    startSlideshow(); // Start the automatic slideshow
});
