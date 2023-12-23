alert('Hola desea agregar un nuevo producto');

let agregarNuevoProducto = [];

const productoNuevoAgregar = {
    id: '',
    skill_img: '',
    nombre:'',
    precio:'',
    informacion:''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const imagenInput = document.querySelector('#url');
const nombreInput = document.querySelector('#nombre');
const precioInput = document.querySelector('#precio');
const descripcionInput = document.querySelector('#descripcion');
const botonAgregarProductoInput = document.querySelector('#btnAgregarProducto');


formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    if(url.value === '' || nombre.value === '' || precio.value === '' || descripcion.value === '' ) {
        alert('Es necesario rellenar todos los campos');
        return;
    }

    if(editando) {
        // editarProducto();
        editando = false;
    } else {
        productoNuevoAgregar.id = Date.now();
        productoNuevoAgregar.url = imagenInput.value;
        productoNuevoAgregar.nombre = nombreInput.value;
        productoNuevoAgregar.precio = precioInput.value;
        productoNuevoAgregar.descripcion = descripcionInput.value;

        agregarProducto();
    }
}

function agregarProducto(){
    agregarNuevoProducto.push({...productoNuevoAgregar});

    mostrarNuevosProductos();

    formulario.reset();
    limpiarObjeto();

}


function limpiarObjeto() {
    productoNuevoAgregar.id = '';
    productoNuevoAgregar.url = '';
    productoNuevoAgregar.nombre = '';
    productoNuevoAgregar.precio = '';
    productoNuevoAgregar.descripcion = '';
}


function mostrarNuevosProductos(){
    const producto = document.querySelector('.agregar_contenedor');

    agregarNuevoProducto.forEach( producto => {
        const { id, skill_img, nombre, precio, informacion } = producto; 

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${skill_img} - ${nombre} - ${precio} - ${informacion} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        // editarBoton.onclick = () => cargarProducto(producto);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        // eliminarBoton.onclick = () => eliminarProducto(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        // const hr = document.createElement('hr');

        // producto.appendChild(parrafo);
        // producto.appendChild(hr);
    });
}


