function cambiarImagen() {
    let num_imagen  = parseInt(document.getElementById("img_1").value);
    let imagen      = document.getElementById('img');

    if (num_imagen == 1) {
        imagen.src = "./recurso/cereales.jpg";
    } else if (num_imagen == 2) {
        imagen.src = "./recurso/legum.jpg";
    } else if (num_imagen == 3) {
        imagen.src = "./recurso/proteinas-animal.jpg";
    } else if (num_imagen == 4) {
        imagen.src = "./recurso/verduras.jpg";
    } else {
        imagen.src = "./recurso/frutas.jpg";
    }
}