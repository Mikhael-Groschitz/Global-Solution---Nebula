document.addEventListener('DOMContentLoaded', (event) => {
    const content = document.getElementById('content');

    const loadContent = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = '';
                content.innerHTML = data;

                attachButtonEventListeners();
            })
            .catch(error => console.error('Error loading content:', error));
    };

    // Function to attach event listeners to buttons
    const attachButtonEventListeners = () => {
        const buttons = document.querySelectorAll('[data-action]');
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const action = button.getAttribute('data-action');
                handleAction(action);
            });
        });
    };

    // Load home.html content by default
    loadContent('home.html');

    // Add click event listeners for each link
    document.getElementById('home-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('home.html');
    });

    document.getElementById('about-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('about.html');
    });

    document.getElementById('features-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('features.html');
    });

    document.getElementById('research-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('research.html');
    });

    document.getElementById('technology-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('technology.html');
    });

    document.getElementById('application-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('application.html');
    });

    document.getElementById('news-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('news.html');
    });

    document.getElementById('faq-link').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('faq.html');
    });

    function handleAction(action) {
        switch(action) {
            case 'contact':
                window.location.href = 'contact.html';
                break;
            case 'learn-more':
                window.location.href = 'learn-more.html';
                break;
            default:
                break;
        }
    }

    attachButtonEventListeners();
});