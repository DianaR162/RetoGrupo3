const ctx = document.getElementById('radar-graph');
const COLOR_BLUE = '#000066';

const data = {
    labels: [
        'Conocimiento del cliente',
        ['Conocimiento', 'del negocio'],
        ['Coherencia del', 'modelo de negocio'],
        ['Alineación en', 'la comunicación', 'interna'],
        'Salud financiera'
    ],
    datasets: [
        {
            label: 'Radar estratégico',
            data: [3, 1, 2, 4, 2],
            fill: false,
            borderColor: COLOR_BLUE,
            pointBackgroundColor: COLOR_BLUE,
            pointBorderColor: COLOR_BLUE,
            pointHoverBackgroundColor: COLOR_BLUE,
            pointHoverBorderColor: COLOR_BLUE
        }
    ]
};

new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 2
            }
        },
        scale: {
            r: {
                min: 0,
                max: 4,
                stepSize: 0.5
            }
        }
    }
});
