document.addEventListener('DOMContentLoaded', () => {
    const navCollapse = document.querySelector('.nav-collapse');
    const navLinks = document.querySelector('.nav-links');
    if (navCollapse && navLinks) {
        navCollapse.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.width = `${scrollPercent}%`;
        });
    }
});