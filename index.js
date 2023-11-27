//Modal Isa - Meus collab

const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener(`click`);

function openModal() {
    let modal = document.getElementById('modal');
    let overlay = document.querySelector('.modal-overlay');

    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('modal');
    let overlay = document.querySelector('.modal-overlay');

    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Gráfico Isa Metas 1

function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ['ANO', 'Nº Preenchimentos', 'Nº Colaboradores'],
        ['2019', 832, 845],
        ['2020', 798, 860],
        ['2021', 980, 1120],
        ['2022', 1242, 1800]
    ]);

    let options = {
        chart: {
            title: 'Adesão dos colaboradores por ano (2022).',
            subtitle: 'Nº de preenchimentos X Nº de Colaboradores. Dados coletados mensalmente: 2019-2022',
        }
    };

    let chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

