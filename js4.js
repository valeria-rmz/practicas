let hora = 5;
let frecuencia = 6;
let toma = 1;


console.log("Toma 1", hora);

while (hora < 24) {
    hora = hora + frecuencia;
    toma++;
    if(hora > 23)
        break

    console.log("Toma", toma, hora);
}