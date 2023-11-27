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
    let data1 = google.visualization.arrayToDataTable([
        ['MÊS', 'Nº Preenchimentos', 'Nº Colaboradores'],
        ['Jan', 1740, 1996],
        ['Fev', 1881, 1992],
        ['Mar', 1866, 2000],
        ['Abr', 1868, 2000],
        ['Mai', 1859, 1998],
        ['Jun', 1980, 1998],
        ['Jul', 1899, 2004],
        ['Ago', 1992, 2003],
        ['Set', 1980, 2000],
        ['Out', 1981, 2000],
        ['Nov', 0, 0],
        ['Dez', 0, 0]
    ]);

    let data2 = google.visualization.arrayToDataTable([
        ['ANO', 'Nº Preenchimentos', 'Nº Colaboradores'],
        ['2019', 832, 845],
        ['2020', 798, 860],
        ['2021', 980, 1120],
        ['2022', 1242, 1800]
    ]);

    let options1 = {
        chart: {
            title: 'Adesão dos colaboradores por mês (2023).',
            subtitle: 'Nº de Preenchimentos X Nº de Colaboradores. Dados coletados mensalmente.',
        }
    };

    let options2 = {
        chart: {
            title: 'Adesão dos colaboradores por ano (2019 - 2022).',
            subtitle: 'Nº de Preenchimentos X Nº de Colaboradores anuais. Dados coletados mensalmente: 2019-2022',
        }
    };

    let chart1 = new google.charts.Bar(document.getElementById('columnchart_material1'));
    let chart2 = new google.charts.Bar(document.getElementById('columnchart_material2'));

    chart1.draw(data1, google.charts.Bar.convertOptions(options1));
    chart2.draw(data2, google.charts.Bar.convertOptions(options2));
}


    
