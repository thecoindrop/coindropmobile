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
