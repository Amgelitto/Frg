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
        },
        {
            id: 2,
            nombre: 'Sweet Black',
            precio: 35000,
            precioReal: 47000,
            imagen: 'img/prods/sweetBlack.webp',
            categoria: 'cyzone'
        },
        {
            id: 3,
            nombre: 'Fleur Icon',
            precio: 60000,
            precioReal: 89600,
            imagen: 'img/prods/fleurIcon.webp',
            categoria: 'lbel'
        },
        {
            id: 4,
            nombre: 'Vibranza',
            precio: 55000,
            precioReal: 89000,
            imagen: 'img/prods/vibranza.webp',
            categoria: 'esika'
        },
        {
            id: 5,
            nombre: 'Vibranza Addiction',
            precio: 59000,
            precioReal: 93000,
            imagen: 'img/prods/vibranzaAddiction.jpg',
            categoria: 'esika'
        },
        {
            id: 6,
            nombre: 'In Love',
            precio: 38000,
            precioReal: 47000,
            imagen: 'img/prods/inLove.webp',
            categoria: 'cyzone'
        },
        {
            id: 7,
            nombre: 'In Love Passion',
            precio: 39000,
            precioReal: 47000,
            imagen: 'img/prods/inLovePassion.jpg',
            categoria: 'cyzone'
        },
        {
            id: 8,
            nombre: 'Dancing',
            precio: 35000,
            precioReal: 39990,
            imagen: 'img/prods/dancing.webp',
            categoria: 'cyzone'
        },
        {
            id: 9,
            nombre: 'Dancing Night',
            precio: 35000,
            precioReal: 39990,
            imagen: 'img/prods/dancingNight.jpg',
            categoria: 'cyzone'
        },
        {
            id: 10,
            nombre: 'Dancing Sunset',
            precio: 35000,
            precioReal: 39990,
            imagen: 'img/prods/dancingSunset.webp',
            categoria: 'cyzone'
        },
        {
            id: 11,
            nombre: 'Expression',
            precio: 55000,
            precioReal: 73000,
            imagen: 'img/prods/expression.jpg',
            categoria: 'esika'
        },
        {
            id: 12,
            nombre: 'Expression Sens',
            precio: 60000,
            precioReal: 85600,
            imagen: 'img/prods/expressionSens.webp',
            categoria: 'esika'
        },
        {
            id: 13,
            nombre: 'Expression Magic',
            precio: 55000,
            precioReal: 73000,
            imagen: 'img/prods/expression.jpg',
            categoria: 'esika'
        },
        {
            id: 14,
            nombre: 'Mithyka',
            precio: 60000,
            precioReal: 107000,
            imagen: 'img/prods/mithyka.webp',
            categoria: 'lbel'
        },
        {
            id: 15,
            nombre: 'Prints',
            precio: 25000,
            precioReal: 37000,
            imagen: 'img/prods/prints.jpg',
            categoria: 'cyzone'
        },
        {
            id: 16,
            nombre: 'Vanilla Scent',
            precio: 50000,
            precioReal: 80000,
            imagen: 'img/prods/vanillaScent.webp',
            categoria: 'esika'
        },
        {
            id: 17,
            nombre: 'Mon',
            precio: 58000,
            precioReal: 94990,
            imagen: 'img/prods/mon.webp',
            categoria: 'lbel'
        },
        {
            id: 18,
            nombre: 'Mon Gold',
            precio: 58000,
            precioReal: 94990,
            imagen: 'img/prods/monGold.webp',
            categoria: 'lbel'
        },
        {
            id: 19,
            nombre: 'Impredecible Mysterious',
            precio: 40000,
            precioReal: 67990,
            imagen: 'img/prods/impredecibleMysterious.jpg',
            categoria: 'esika'
        },
        {
            id: 20,
            nombre: 'Impredecible',
            precio: 40000,
            precioReal: 67990,
            imagen: 'img/prods/impredecibleMysterious.jpg',
            categoria: 'esika'
        },
        {
            id: 21,
            nombre: 'Girlink',
            precio: 25000,
            precioReal: 39990,
            imagen: 'img/prods/girlink.webp',
            categoria: 'cyzone'
        },
        {
            id: 22,
            nombre: 'Mystic Star',
            precio: 35990,
            precioReal: 68990,
            imagen: 'img/prods/mysticStar.webp',
            categoria: 'cyzone'
        },
        {
            id: 23,
            nombre: 'Fiori',
            precio: 39990,
            precioReal: 57990,
            imagen: 'img/prods/fiori.webp',
            categoria: 'esika'
        },
        {
            id: 24,
            nombre: 'Liasson',
            precio: 80290,
            precioReal: 112000,
            imagen: 'img/prods/liasson.webp',
            categoria: 'lbel'
        },
        {
            id: 25,
            nombre: "L'image",
            precio: 43000,
            precioReal: 74990,
            imagen: 'img/prods/limage.jpg',
            categoria: 'esika'
        },
        {
            id: 26,
            nombre: 'Autenti-k Vibes',
            precio: 35000,
            precioReal: 50000,
            imagen: 'img/prods/autentikVibes.webp',
            categoria: 'cyzone'
        }
    ];

    const divisa = '$';
    const DOMitems = document.querySelector('#productos');
    const filtroTodas = document.getElementById("filtro-todas");
    const filtroEsika = document.getElementById("filtro-esika");
    const filtroLbel = document.getElementById("filtro-lbel");
    const filtroCyzone = document.getElementById("filtro-cyzone");
    const ordenAsc = document.getElementById("orden-asc");
    const ordenDesc = document.getElementById("orden-desc");
    const ordenDefault = document.getElementById("orden-default");

    // Función para renderizar productos
    function renderizarProductos() {
        DOMitems.innerHTML = "";
        let filtro = "todas";
        if (filtroEsika.checked) {
            filtro = "esika";
        } else if (filtroLbel.checked) {
            filtro = "lbel";
        } else if (filtroCyzone.checked) {
            filtro = "cyzone";
        }

        let productosFiltrados = baseDeDatos.filter(producto =>
            filtro === "todas" || producto.categoria === filtro
        );

        if (ordenAsc.checked) {
            productosFiltrados.sort((a, b) => a.precio - b.precio);
        } else if (ordenDesc.checked) {
            productosFiltrados.sort((a, b) => b.precio - a.precio);
        }

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

        // Eventos de filtro y orden
        filtroTodas.addEventListener('change', renderizarProductos);
        filtroEsika.addEventListener('change', renderizarProductos);
        filtroLbel.addEventListener('change', renderizarProductos);
        filtroCyzone.addEventListener('change', renderizarProductos);
        ordenAsc.addEventListener('change', renderizarProductos);
        ordenDesc.addEventListener('change', renderizarProductos);
        ordenDefault.addEventListener('change', renderizarProductos);
    
        // Inicio con todos los productos
        renderizarProductos();
    });
    