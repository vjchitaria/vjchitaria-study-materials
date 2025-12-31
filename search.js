document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');
    const features = document.querySelectorAll('.feature'); // Targets feature cards on home.html

    function performSearch() {
        const query = searchBar.value.toLowerCase().trim();
        
        // Filter feature cards
        features.forEach(feature => {
            const text = feature.textContent.toLowerCase();
            feature.classList.toggle('hidden', !text.includes(query));
        });
    }

    // Search on input or button click
    searchBar.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', performSearch);
});