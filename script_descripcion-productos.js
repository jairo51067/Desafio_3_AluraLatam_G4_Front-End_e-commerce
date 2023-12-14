function mostrarContenido(imagenURL, titulo, precio, descripcion) {
  var imagen = document.getElementById('imagen');
  var tituloElemento = document.getElementById('titulo');
  var precioDelProducto = document.getElementById('precio');
  var descripcionElemento = document.getElementById('descripcion');

  // Asignar la imagen, título, precio y descripción correspondientes
  imagen.src = imagenURL;
  tituloElemento.innerHTML = titulo;
  precioDelProducto.innerHTML= precio;
  descripcionElemento.innerHTML = descripcion;
}
