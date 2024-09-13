// ARCHIVO: mainEJ3.js
// AUTOR: Ricardo Gabriel Manrique Silva
// FECHA: 13/09/24
// DESCRIPCIÓN: Archivo JavaScript para manipular el carrito
document.addEventListener('DOMContentLoaded', () => {
    // Lista con los productos con su ID, nombre y precio
    const productosDisponibles = [
        { id: 1, nombre: 'Arroz Superior 5KG - Costeño', precio: 24.50 },
        { id: 2, nombre: 'Leche Gloria 6 unidades', precio: 12.90 },
        { id: 3, nombre: 'Lata 1KG Milo', precio: 36.90 },
        { id: 4, nombre: '30 Huevos Pardos La Calera', precio: 21.50 },
        { id: 5, nombre: 'Cereal Chocapic 350g', precio: 16.90 },
        { id: 6, nombre: 'Azúcar Rubia de 1KG - Costeño', precio: 5.90 },
        { id: 7, nombre: 'Pan de Molde Integral 495g - Unión', precio: 12.40 },
        { id: 8, nombre: 'Granola con miel 400gr - Unión', precio: 13.10 },
    ];

    // Función para actualizar el total de cada producto
    function actualizarTotalProducto(fila) {
        const precio = parseFloat(fila.querySelector('.precio').textContent);
        const cantidad = parseInt(fila.querySelector('.cantidad').value);
        const totalProducto = precio * cantidad;
        fila.querySelector('.total-producto').textContent = totalProducto.toFixed(2);
    }

    // Función para calcular el total del carrito
    function actualizarTotalCarrito() {
        let totalCarrito = 0;
        const filas = document.querySelectorAll('#cart-items tr');
        filas.forEach(fila => {
            const totalProducto = parseFloat(fila.querySelector('.total-producto').textContent);
            totalCarrito += totalProducto;
        });
        document.getElementById('total-carrito').textContent = totalCarrito.toFixed(2);
    }

    // Función para agregar un nuevo producto al carrito
    function agregarProductoAlCarrito(producto) {
        const fila = document.createElement('tr');
        fila.setAttribute('data-id', producto.id);
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td><input type="number" class="form-control cantidad" value="0" min="0"></td>
            <td class="precio">${producto.precio.toFixed(2)}</td>
            <td class="total-producto">0.00</td>
            <td><button class="btn btn-danger btn-eliminar">Eliminar</button></td>
        `;
        document.getElementById('cart-items').appendChild(fila);

        // Agregar eventos a los nuevos elementos
        fila.querySelector('.cantidad').addEventListener('change', (event) => {
            actualizarTotalProducto(fila);
            actualizarTotalCarrito();
        });

        fila.querySelector('.btn-eliminar').addEventListener('click', (event) => {
            fila.remove();
            actualizarTotalCarrito();
        });
    }

    // Actualizar el total del carrito al cambiar las cantidades
    document.querySelectorAll('.cantidad').forEach(input => {
        input.addEventListener('change', (event) => {
            const fila = event.target.closest('tr');
            actualizarTotalProducto(fila);
            actualizarTotalCarrito();
        });
    });

    // Eliminar un producto del carrito
    document.querySelectorAll('.btn-eliminar').forEach(button => {
        button.addEventListener('click', (event) => {
            const fila = event.target.closest('tr');
            fila.remove();
            actualizarTotalCarrito();
        });
    });

    // Agregar un producto desde la lista de disponibles
    document.getElementById('agregar-producto').addEventListener('click', () => {
        const productoId = parseInt(document.getElementById('productos-disponibles').value);
        const producto = productosDisponibles.find(p => p.id === productoId);

        // Verifica si el producto ya está en el carrito
        if (!document.querySelector(`#cart-items tr[data-id="${producto.id}"]`)) {
            agregarProductoAlCarrito(producto);
        }
    });

    // Inicializar el total en 0 cuando la página se carga
    actualizarTotalCarrito();
});