    document.addEventListener('DOMContentLoaded', () => {
        // Smooth scroll for anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href && href !== '#') {
                    e.preventDefault();
                    const targetEl = document.querySelector(href);
                    if (targetEl) {
                        targetEl.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    });