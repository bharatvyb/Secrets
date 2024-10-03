document.addEventListener('DOMContentLoaded', () => {
    console.log("Settings JS Loaded");

    const customizeMenuBtn = document.getElementById('customize-menu-btn');
    const saveMenuBtn = document.getElementById('save-menu-btn');
    const cancelMenuBtn = document.getElementById('cancel-menu-btn');
    const customizeModal = document.getElementById('customize-modal');

    // Log to ensure all elements are correctly selected
    console.log("Custom Menu Button:", customizeMenuBtn);
    console.log("Save Button:", saveMenuBtn);
    console.log("Cancel Button:", cancelMenuBtn);
    console.log("Customize Modal:", customizeModal);

    if (!customizeModal || !saveMenuBtn || !cancelMenuBtn) {
        console.error("Modal or button elements are missing. Check the HTML file.");
        return;
    }

    console.log("Attaching event listeners...");

    // Show modal on button click
    customizeMenuBtn.addEventListener('click', () => {
        console.log("Customize Menu Button Clicked!");
        showModal('customize-modal'); // Use showModal function
    });

    // Close modal on clicking cancel button
    cancelMenuBtn.addEventListener('click', () => {
        console.log("Cancel Button Clicked!");
        hideModal('customize-modal'); // Use hideModal function
    });

    // Save emoji settings with additional debug logs
    saveMenuBtn.addEventListener('click', () => {
        console.log("Save Button Clicked! Saving emoji settings...");

        // Retrieve values from the emoji inputs
        const menuItems = {
            banks: document.getElementById('banks-emoji').value || '🏦',
            cards: document.getElementById('cards-emoji').value || '💳',
            sites: document.getElementById('sites-emoji').value || '🌐',
            apps: document.getElementById('apps-emoji').value || '📱',
            others: document.getElementById('others-emoji').value || '📁',
            settings: document.getElementById('settings-emoji').value || '⚙️'
        };

        console.log("Collected Menu Items:", menuItems);

        // Store menu emojis in localStorage
        localStorage.setItem('menuEmojis', JSON.stringify(menuItems));
        console.log("Menu Items Saved to localStorage:", menuItems);

        // Call a dummy function to confirm event listener works (Remove this later)
        alert("Emoji settings saved successfully!");

        // Update the menu bar with new emojis
        updateMenuBar(menuItems);

        // Close the modal
        hideModal('customize-modal');
        console.log("Modal closed after saving.");
    });

    console.log("Event listeners attached successfully!");

    // Function to update the menu bar with new emojis
    function updateMenuBar(emojis) {
        document.getElementById('menu-banks').innerHTML = emojis.banks + '<span class="menu-label">Banks</span>';
        document.getElementById('menu-cards').innerHTML = emojis.cards + '<span class="menu-label">Cards</span>';
        document.getElementById('menu-sites').innerHTML = emojis.sites + '<span class="menu-label">Sites</span>';
        document.getElementById('menu-apps').innerHTML = emojis.apps + '<span class="menu-label">Apps</span>';
        document.getElementById('menu-others').innerHTML = emojis.others + '<span class="menu-label">Others</span>';
        document.getElementById('menu-settings').innerHTML = emojis.settings + '<span class="menu-label">Settings</span>';
        console.log("Menu Bar Updated with new emojis.");
    }
});