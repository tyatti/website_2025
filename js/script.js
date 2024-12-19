document.getElementById('darkModeToggle').addEventListener('click', function() {
    // Toggle the dark-mode class on the body and all necessary elements
    document.body.classList.toggle('dark-mode');
    document.querySelector('.header').classList.toggle('dark-mode');
    document.querySelector('.profile-picture').classList.toggle('dark-mode');
    document.querySelector('.content').classList.toggle('dark-mode');
    
    // Change the button icon (optional)
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = '🌙';  // Switch to light mode icon
    } else {
        this.textContent = '🌞';  // Switch to dark mode icon
    }
});
