import FormularioProducto from "./products/FormularioProducto";
import ProductosDisponibles from "./ProductosDisponibles";

const Administrador = () => {
  return (
    <>
      <section className="container mt-4">
        <h2 className="display-3">Crear Producto</h2>
        <hr />
        <FormularioProducto></FormularioProducto>
      </section>
      <ProductosDisponibles></ProductosDisponibles>
    </>
  );
};

export default Administrador;
