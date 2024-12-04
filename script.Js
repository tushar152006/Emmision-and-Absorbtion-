document.addEventListener("DOMContentLoaded", () => {
    // Constants
    const h = 6.626e-34; // Planck's constant in Js
    const c = 3e8;       // Speed of light in m/s

    // Energy Calculator Function
    window.calculateEnergy = () => {
        const wavelengthInput = document.getElementById("wavelength").value;

        if (wavelengthInput) {
            const wavelength = wavelengthInput * 1e-9; // Convert nm to m
            const energy = (h * c) / wavelength;
            document.getElementById("result").innerText = `Energy: ${energy.toExponential(3)} J`;
        } else {
            document.getElementById("result").innerText = "Please enter a wavelength.";
        }
    };

    // Chart.js Graph
    const ctx = document.getElementById('spectrumChart').getContext('2d');
    const data = {
        labels: ['400 nm', '500 nm', '600 nm', '700 nm'], // Example wavelengths
        datasets: [
            {
                label: 'Absorption Intensity',
                data: [10, 15, 12, 8], // Example data
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Emission Intensity',
                data: [5, 10, 20, 12], // Example data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Wavelength (nm)',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Intensity',
                    },
                },
            },
        },
    };

    new Chart(ctx, config);
});
