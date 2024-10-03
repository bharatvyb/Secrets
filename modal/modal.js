// Modal Utility Functions
document.addEventListener('DOMContentLoaded', () => {
    console.log("Modal JS Loaded");

    // Function to show a modal
    function showModal(modalId) {
        console.log(`Attempting to show modal: ${modalId}`);
        const modal = document.getElementById(modalId);
        if (modal) {
            console.log(`Modal Found! Current Classes: ${modal.className}`);
            modal.classList.remove('hidden');
            console.log(`Modal Updated Classes: ${modal.className}`);
        } else {
            console.error(`Modal with ID ${modalId} not found!`);
        }
    }

    // Function to hide a modal
    function hideModal(modalId) {
        console.log(`Attempting to hide modal: ${modalId}`);
        const modal = document.getElementById(modalId);
        if (modal) {
            console.log(`Modal Found! Current Classes: ${modal.className}`);
            modal.classList.add('hidden');
            console.log(`Modal Updated Classes: ${modal.className}`);
        } else {
            console.error(`Modal with ID ${modalId} not found!`);
        }
    }

    // Event Listener for close buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                console.log(`Closing modal: ${modal.id}`);
                hideModal(modal.id);
            }
        });
    });

    // Attach these utility functions to the global window object
    window.showModal = showModal;
    window.hideModal = hideModal;
    console.log("Attached showModal and hideModal to window object.");
});