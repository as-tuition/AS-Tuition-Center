document.getElementById('whatsapp-button').addEventListener('click', function() {
    window.open('https://wa.me/919524863508', '_blank');
});

// Placeholder for Google Maps initialization
// function initMap() {
//     const location = { lat: 10.578389, lng: 77.359778 };
//     const map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 16,
//         center: location,
//     });
//     new google.maps.Marker({
//         position: location,
//         map: map,
//     });
// }
// if (typeof google !== 'undefined') {
//     initMap();
// } else {
//     // Fallback if Google Maps API is not loaded
//     console.warn('Google Maps API not loaded. Map will not be displayed.');
// }