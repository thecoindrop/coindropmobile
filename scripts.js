const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const scrollingWrapper = document.querySelector('.scrolling-wrapper');

let scrollPosition = 0;

leftArrow.addEventListener('click', () => {
    const itemWidth = document.querySelector('.featured-airdrop').offsetWidth + 10; // Adjust for margin
    scrollPosition = Math.max(scrollPosition - itemWidth, 0);
    scrollingWrapper.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    const itemWidth = document.querySelector('.featured-airdrop').offsetWidth + 10; // Adjust for margin
    const maxScroll = scrollingWrapper.scrollWidth - scrollingWrapper.clientWidth;
    scrollPosition = Math.min(scrollPosition + itemWidth, maxScroll);
    scrollingWrapper.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const airdrops = document.querySelectorAll('.featured-airdrop');
    let currentIndex = 0;
    let interval;

    function showAirdrop(index) {
        airdrops.forEach((airdrop, i) => {
            airdrop.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextAirdrop() {
        currentIndex = (currentIndex + 1) % airdrops.length;
        showAirdrop(currentIndex);
    }

    function prevAirdrop() {
        currentIndex = (currentIndex - 1 + airdrops.length) % airdrops.length;
        showAirdrop(currentIndex);
    }

    function startSlideshow() {
        interval = setInterval(nextAirdrop, 3000); // Change image every 3 seconds
    }

    function stopSlideshow() {
        clearInterval(interval);
    }

    // Event listeners for arrow buttons
    document.querySelector('.prev-arrow').addEventListener('click', function() {
        stopSlideshow();
        prevAirdrop();
        startSlideshow();
    });

    document.querySelector('.next-arrow').addEventListener('click', function() {
        stopSlideshow();
        nextAirdrop();
        startSlideshow();
    });

    showAirdrop(currentIndex); // Show the first image initially
    startSlideshow(); // Start the automatic slideshow
});

