function calcular() {
    let numero1         = parseInt(document.getElementById("num1").value);
    let numero2         = parseInt(document.getElementById("num2").value);
    let operacion       = document.getElementById("operacion").value;
    let lbl_resultado   = document.getElementById("lbl_resultado");
    
    // Operacion
    let resultado = 0;

    if (operacion == "suma") {
        resultado = numero1 + numero2;

    } else if (operacion == "resta"){
        resultado = numero1 - numero2;

    } else if (operacion == "multiplicacion"){
        resultado = numero1 * numero2;

    } else {
        resultado = numero1 / numero2;
    }

    lbl_resultado.value = resultado;
}