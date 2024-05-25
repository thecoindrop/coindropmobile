document.addEventListener('DOMContentLoaded', function() {
    const airdrops = document.querySelectorAll('.featured-airdrop');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');
    let currentIndex = 0;

    // Function to show the current airdrop
    function showAirdrop(index) {
        airdrops.forEach((airdrop, i) => {
            airdrop.style.display = i === index ? 'block' : 'none';
        });
    }

    // Function to move to the next airdrop
    function nextAirdrop() {
        currentIndex = (currentIndex + 1) % airdrops.length;
        showAirdrop(currentIndex);
    }

    // Function to move to the previous airdrop
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

    // Automatically trigger the right arrow click every 2 seconds
    setInterval(function() {
        rightArrow.click();
    }, 5000); // Change image every 2 seconds

    // Initialize the first image
    showAirdrop(currentIndex); // Show the first image initially
});

//Navigation Bar Start

function toggleMenu() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('hidden');
}

function toggleSearchBar() {
    const searchBarContainer = document.querySelector('.search-bar-container');
    searchBarContainer.classList.toggle('hidden');
}

function handleSearch() {
    const query = document.querySelector('.search-bar').value.toLowerCase();
    if (query) {
        const airdrops = document.querySelectorAll('.airdrop');
        airdrops.forEach(airdrop => {
            const title = airdrop.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                airdrop.style.display = 'block';
            } else {
                airdrop.style.display = 'none';
            }
        });
    } else {
        document.querySelectorAll('.airdrop').forEach(airdrop => airdrop.style.display = 'block');
    }
}

//smaller screen optimization
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').classList.toggle('show');
});
