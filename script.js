// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-white');
    document.body.classList.toggle('text-gray-900');
};

// Attach event listener to dark mode button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// Update Footer Year Dynamically
document.getElementById('year').textContent = new Date().getFullYear();
