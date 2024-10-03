document.addEventListener('DOMContentLoaded', () => {
    // Load stored menu emojis on page load
    const savedEmojis = JSON.parse(localStorage.getItem('menuEmojis'));
    if (savedEmojis) {
        updateMenuBar(savedEmojis);
    }

    // Update the menu bar with stored emojis
    function updateMenuBar(emojis) {
        document.getElementById('menu-banks').innerHTML = emojis.banks + '<span class="menu-label">Banks</span>';
        document.getElementById('menu-cards').innerHTML = emojis.cards + '<span class="menu-label">Cards</span>';
        document.getElementById('menu-sites').innerHTML = emojis.sites + '<span class="menu-label">Sites</span>';
        document.getElementById('menu-apps').innerHTML = emojis.apps + '<span class="menu-label">Apps</span>';
        document.getElementById('menu-others').innerHTML = emojis.others + '<span class="menu-label">Others</span>';
        document.getElementById('menu-settings').innerHTML = emojis.settings + '<span class="menu-label">Settings</span>';
    }
});