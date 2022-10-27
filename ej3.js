function calcularTabla() {
    let numero       = parseInt(document.getElementById("Tabla").value);
    let lista_tabla  = document.getElementById("tabla");

    lista_tabla.innerHTML = "";

    for (let index = 1; index <= 10; index++) {
        lista_tabla.innerHTML += `<li>${numero} * ${index} = ${numero * index}</li>`;
    }
}