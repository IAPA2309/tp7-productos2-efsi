import React from 'react'

function Home({ products }) {

    console.log(products);

    const seleccionarProductosAleatorios = (productos, cantidad) => {
      // Verificar que el array de productos tenga suficientes elementos
      if (productos.length < cantidad) {
        return [];
      }
      var productosSeleccionados = [];

      // Copiar el array original para evitar modificarlo directamente
      var copiaProductos = productos.slice();

      // Seleccionar productos aleatorios
      for (var i = 0; i < cantidad; i++) {
        // Generar un índice aleatorio entre 0 y la longitud actual del array copiado
        var indiceAleatorio = Math.floor(Math.random() * copiaProductos.length);

        // Obtener el producto correspondiente al índice aleatorio
        var productoSeleccionado = copiaProductos[indiceAleatorio];

        // Agregar el producto seleccionado al nuevo array
        productosSeleccionados.push(productoSeleccionado);

        // Eliminar el producto seleccionado del array copiado
        copiaProductos.splice(indiceAleatorio, 1);
      }
      return productosSeleccionados;
    }

    let productosSeleccionados = seleccionarProductosAleatorios(products, 6);

  return (
    <div>
      {products && (
        <div>
          {productosSeleccionados.map((product) => {
            return <div key={product.title}>{product.title}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default Home