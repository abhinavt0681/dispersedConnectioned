(function () {
    const body = document.body;
    const toggle = document.getElementById('themeToggle');
    const storedTheme = localStorage.getItem('dc-blog-theme');

    if (storedTheme) {
        body.setAttribute('data-theme', storedTheme);
        if (toggle) {
            toggle.querySelector('.toggle-label').textContent = storedTheme === 'dark' ? 'Light' : 'Dark';
            toggle.querySelector('.toggle-icon').textContent = storedTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = body.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', next);
            localStorage.setItem('dc-blog-theme', next);
            toggle.querySelector('.toggle-label').textContent = next === 'dark' ? 'Light' : 'Dark';
            toggle.querySelector('.toggle-icon').textContent = next === 'dark' ? '☀️' : '🌙';
        });
    }

    document.querySelectorAll('.copy-link').forEach((button) => {
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(button.dataset.url || window.location.href).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => (button.textContent = 'Copy Link'), 2500);
            });
        });
    });

    const likeButton = document.querySelector('.like-button');
    if (likeButton) {
        likeButton.addEventListener('click', async () => {
            const url = likeButton.dataset.likeUrl;
            if (!url) return;
            const csrftoken = getCookie('csrftoken');
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'X-CSRFToken': csrftoken,
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                });
                if (!response.ok) return;
                const data = await response.json();
                const likeCount = document.getElementById('likeCount');
                if (likeCount && data.likes !== undefined) {
                    likeCount.textContent = `${data.likes} likes`;
                }
                if (data.already_liked && likeButton) {
                    likeButton.classList.add('liked');
                }
            } catch (error) {
                console.error('Unable to like post', error);
            }
        });
    }

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
})();
