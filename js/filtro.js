document.addEventListener('DOMContentLoaded', () => {
    // Base de datos de productos
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Fleur',
            precio: 50000,
            precioReal: 89000,
            imagen: 'img/prods/fleur.jpg',
            categoria: 'lbel'
        }
    ];

    const divisa = '$';
    const DOMitems = document.querySelector('#productos');
    const filtroSelect = document.getElementById("filtro");

    // Función para renderizar productos
    function renderizarProductos() {
        DOMitems.innerHTML = "";
        const filtro = filtroSelect.value;
        const productosFiltrados = baseDeDatos.filter(producto =>
            filtro === "todas" || producto.categoria === filtro
        );
        productosFiltrados.forEach((info) => {
            // Estructura de la tarjeta
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.innerHTML = `${info.precio}${divisa} <span style="text-decoration: line-through;">${info.precioReal}${divisa}</span>`;
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    // Eventos
    filtroSelect.addEventListener('change', renderizarProductos);

    // Inicio
    renderizarProductos();
});
