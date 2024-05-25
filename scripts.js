document.addEventListener('DOMContentLoaded', function() {
    const airdrops = document.querySelectorAll('.featured-airdrop');
    let currentIndex = 0;

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

    // Event listeners for manual navigation
    leftArrow.addEventListener('click', function() {
        prevAirdrop();
    });

    rightArrow.addEventListener('click', function() {
        nextAirdrop();
    });

    // Automatically trigger the right arrow click every 5 seconds
    setInterval(function() {
        rightArrow.click();
    }, 5000); // Change image every 5 seconds

    // Initialize the first image
    showAirdrop(currentIndex); // Show the first image initially
});
