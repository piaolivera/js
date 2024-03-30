document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('a[href="#sobre-mi"]').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#sobre-mi').scrollIntoView({ behavior: 'smooth' });
    });
});
