document.addEventListener('DOMContentLoaded', () => {
    const populationChart = document.getElementById('populationChart').getContext('2d');
    new Chart(populationChart, {
        type: 'line',
        data: {
            labels: ['1970', '1980', '1990', '2000', '2010', '2020'],
            datasets: [{
                label: 'Black Population (%)',
                data: [70, 70.3, 65.8, 60, 50.7, 41.8],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Population (%)'
                    },
                    min: 0,
                    max: 100
                }
            }
        }
    });

    const map = L.map('map').setView([38.907, -77.036], 12);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Optional: Add markers for neighborhoods or significant points
    L.marker([38.907, -77.036]).addTo(map)
        .bindPopup('Washington, D.C.')
        .openPopup();
});

const galleryData = [
    { src: 'img/go-go.jpg', caption: 'Mural of man playing go-go drums' },
    { src: 'img/wamu.jpg', caption: 'Modern streets of D.C.' }
];

const galleryContainer = document.getElementById('visualGallery');
galleryData.forEach(item => {
    const figure = document.createElement('figure');
    figure.classList.add('me-3');
    figure.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" class="img-fluid">
        <figcaption>${item.caption}</figcaption>
    `;
    galleryContainer.appendChild(figure);
});