import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

function Home({ products }) {
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
  };

  let productosSeleccionados = seleccionarProductosAleatorios(products, 6);

  return (
    <>
      {products && (
        <div className="flex-container">
          <h2 className="titulo">Podria interesarte...</h2>
          {productosSeleccionados.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  brand={product.brand}
                  thumbnail={product.thumbnail}
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Home;
