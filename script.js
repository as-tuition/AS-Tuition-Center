document.getElementById('whatsapp-button').addEventListener('click', function() {
    window.open('https://wa.me/919524863508', '_blank');
});

// Google Maps initialization
function initMap() {
    const location = { lat: 10.578389, lng: 77.359778 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});