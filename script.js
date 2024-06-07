document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-action]');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const action = button.getAttribute('data-action');
            handleAction(action);
        });
    });

    function handleAction(action) {
        switch(action) {
            case 'contact':
                window.location.href = 'contact.html';
                break;
            case 'learn-more':
                window.location.href = 'about.html';
                break;
            case 'home':
                window.location.href = 'home.html';
                break;
            case 'logo':
                window.location.href = 'home.html';
                break;
            default:
                break;
        }
    }
});
