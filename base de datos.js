function tasaActual() {
    $.get('https://openexchangerates.org/api/latest.json', { app_id: 'be953408d8e5411284e096755c1939e5' }, function (data) {
        tasa.innerHTML = "1 dolar estadounidense actualmente equivale a " + parseInt(data.rates.COP) + " pesos colombianos";
    });
}

function tasaHistorica() {
    $.get('https://openexchangerates.org/api/historical/' + fecha.value + '.json', { app_id: 'be953408d8e5411284e096755c1939e5' }, function (data) {
        tasaHistory.innerHTML = "En la fecha " + fecha.value + ", 1 dolar estadounidense valia " + parseInt(data.rates.COP) + " pesos colombianos";
        fechas.push(tasaHistory.innerHTML);
        console.log(fechas);
        mostrar();
    });
}