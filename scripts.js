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
    }, 3000); // Change image every 3 seconds

    // Initialize the first image
    showAirdrop(currentIndex); // Show the first image initially
});

//Navigation Bar Start

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function toggleSearch() {
    var searchBar = document.getElementById("searchBar");
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "block";
    }
}
