function handleSearch() {
    const query = document.querySelector('.search-bar').value;
    if (query) {
        alert('You searched for: ' + query);
    } else {
        alert('Please enter a search term');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const claimButtons = document.querySelectorAll('.claim-button');
    const caClaimButtons = document.querySelectorAll('.ca-claim-button');
    const oaClaimButtons = document.querySelectorAll('.oa-claim-button');

    claimButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Claimed potential airdrop!');
        });
    });

    caClaimButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Claimed confirmed airdrop!');
        });
    });

    oaClaimButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Claimed ongoing airdrop!');
        });
    });
});

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

