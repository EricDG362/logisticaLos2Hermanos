var map = L.map('map').setView([-31.406753, -64.160639], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-31.406753, -64.160639]).addTo(map)
    .bindPopup('Mejico 665  B°General Paz.<br> Cordoba. Arg')
    .openPopup();