document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        const popup = document.getElementById('popup');
        document.getElementById('popup-content').innerText = info;
        popup.style.display = 'block';
        });
    });

    document.getElementById('popup-close').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        const popup = document.getElementById('popup');
        if (event.target === popup) {
        popup.style.display = 'none';
        }
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
