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
