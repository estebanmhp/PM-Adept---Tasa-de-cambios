var fechas = [];
var linew;
var contenido;

var historica = document.getElementById("historica");
historica.addEventListener("click", tasaHistorica)



function mostrar() {
    var lista = document.getElementById("historial");
    lista.innerHTML = "";
    fechas.forEach(function (fechas) {
        var linew = document.createElement("li");
        var contenido = document.createTextNode(fechas);
        lista.appendChild(linew);
        linew.appendChild(contenido);
    })
}

var actual = document.getElementById("actual");
actual.addEventListener("click", tasaActual)